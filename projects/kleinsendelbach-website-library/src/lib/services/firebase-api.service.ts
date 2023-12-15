import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { Injectable } from "@angular/core";
import { CrypterService } from "./crypter.service";
import { EnvironmentService } from './environment.service';
import { CallSecret, DatabaseType, FirebaseFunctionResult, FunctionType, VerboseType } from '../types/firebase-api-utils';
import { Result, UtcDate } from '../types';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FirebaseApiService<FirebaseFunctions extends Record<string, FunctionType<unknown, unknown, unknown>>> {

    private resultMappers: { [Key in keyof FirebaseFunctions]: (value: FunctionType.FlattenReturnType<FirebaseFunctions[Key]>) => FunctionType.ReturnType<FirebaseFunctions[Key]> } | null = null;

    constructor(
        private readonly crypter: CrypterService,
        private readonly angularFireFunctions: AngularFireFunctions,
        private readonly environmentService: EnvironmentService<{ databaseType: DatabaseType, callSecretKey: string, verbose: VerboseType }>
    ) {}

    public setup(resultMappers: { [Key in keyof FirebaseFunctions]: (value: FunctionType.FlattenReturnType<FirebaseFunctions[Key]>) => FunctionType.ReturnType<FirebaseFunctions[Key]> }) {
        if (this.resultMappers)
            throw new Error('Firebase api service is already set up.');
        this.resultMappers = resultMappers;
    }

    public function<Key extends keyof FirebaseFunctions & string>(key: Key): FirebaseFunctionCaller<FirebaseFunctions[Key]> {
        if (!this.resultMappers)
            throw new Error('Firebase api service not set up, but a function is requested.');
        return new FirebaseFunctionCaller(this.crypter, this.angularFireFunctions, this.environmentService, this.resultMappers[key], key);
    }
}

export class FirebaseFunctionCaller<FirebaseFunction extends FunctionType<unknown, unknown, unknown>> {
    constructor(
        private readonly crypter: CrypterService,
        private readonly angularFireFunctions: AngularFireFunctions,
        private readonly environmentService: EnvironmentService<{ databaseType: DatabaseType, callSecretKey: string, verbose: VerboseType }>,
        private readonly resultMapper: (value: FunctionType.FlattenReturnType<FirebaseFunction>) => FunctionType.ReturnType<FirebaseFunction>,
        private readonly key: string
    ) {}

    public async call(flattenParameters: FunctionType.FlattenParameters<FirebaseFunction>): Promise<FirebaseFunctionResult<FunctionType.ReturnType<FirebaseFunction>>> {
        const expiresAtUtcDate = UtcDate.now.advanced({ minute: 1 });
        const functionName = this.environmentService.value('databaseType') === 'release' ? this.key : `debug-${this.key}`;
        const callableFunction = this.angularFireFunctions.httpsCallable<{
            verbose: VerboseType;
            databaseType: DatabaseType;
            callSecret: CallSecret.Flatten;
            parameters: string;
        }, { result: string; context: unknown }>(functionName);
        const encryptedReturnValue = await firstValueFrom(callableFunction({
            callSecret: {
                expiresAt: expiresAtUtcDate.encoded,
                hashedData: this.crypter.sha512(expiresAtUtcDate.encoded, this.environmentService.value('callSecretKey'))
            },
            databaseType: this.environmentService.value('databaseType'),
            parameters: this.crypter.encodeEncrypt(flattenParameters),
            verbose: this.environmentService.value('verbose')
        }));
        const returnValue: FirebaseFunctionResult<FunctionType.FlattenReturnType<FirebaseFunction>> = Result.fromObject(this.crypter.decryptDecode(encryptedReturnValue.result));
        if (returnValue.isFailure())
            console.error(returnValue.error);
        return returnValue.map(content => this.resultMapper(content));
    }
}
