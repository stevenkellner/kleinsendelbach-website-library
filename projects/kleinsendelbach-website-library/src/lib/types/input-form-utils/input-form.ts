import { mapRecord, values } from '../record-utils';
import { Result } from '../result';
import { InputError } from './input-error';
import { InputField } from './input-field';
import { ValidationResult } from './validation-result';

export class InputForm<
    Values extends Record<string, unknown>,
    State extends string
> {

    private stateErrors: Record<State | 'invalid' | 'failed', string>;

    private _state: State | 'valid' | 'invalid' | 'loading' | 'success' | 'failed' = 'valid';

    constructor(
        private readonly inputFields: {
            [Key in keyof Values]: InputField<Values[Key]>
        },
        stateErrors: Record<State, string>
    ) {
        this.stateErrors = {
            invalid: 'Nicht alle Eingaben sind gültig.',
            failed: 'Ein unbekannter Fehler ist aufgetretten. Bitte versuchen Sie es erneut.',
            ...stateErrors
        }
    }

    public get values(): Values {
        return mapRecord(this.inputFields, inputField => inputField.value) as Values;
    }

    public get loading(): boolean {
        return this._state === 'loading';
    }

    public get success(): boolean {
        return this._state === 'success';
    }

    public get error(): InputError | null {
        if (this._state === 'valid' || this._state === 'loading' || this._state === 'success')
            return null;
        return new InputError(this.stateErrors[this._state]);
    }

    public get state(): State | 'valid' | 'invalid' | 'loading' | 'success' | 'failed' {
        return this._state;
    }

    public setState(state: State | 'valid' | 'invalid' | 'loading' | 'success' | 'failed') {
        this._state = state;
    }

    public field<Key extends keyof Values>(key: Key): InputField<Values[Key]> {
        return this.inputFields[key];
    }

    public evaluate(): ValidationResult {
        this.setState('valid');
        let result: ValidationResult = 'valid';
        for (const field of values(this.inputFields)) {
            if (field.evaluate() === 'invalid')
                result = 'invalid';
        }
        if (result === 'invalid')
            this.setState('invalid');
        return result;
    }

    public evaluateAndSetLoading(): ValidationResult {
        if (this._state === 'loading')
            return 'invalid';
        const result = this.evaluate();
        if (result === 'valid')
            this.setState('loading');
        return result;
    }

    public reset() {
        this.setState('valid');
        for (const inputField of values(this.inputFields))
            inputField.reset();
    }

    public finish(result: Result<any>) {
        if (result.isFailure())
            return this.setState('failed');
        this.reset();
        this.setState('success');
    }
}
