import { mapRecord, values } from '../record-utils';
import { InputError } from './input-error';
import { InputField } from './input-field';
import { ValidationResult } from './validation-result';

export class InputForm<
    Values extends Record<string, unknown>,
    Status extends string
> {

    public status: Status | 'invalidInput' | 'valid' = 'valid';

    constructor(
        private readonly inputFields: {
            [Key in keyof Values]: InputField<Values[Key]>
        },
        private readonly statusMessages: Record<Status | 'invalidInput', InputError>
    ) {}

    public get values(): Values {
        return mapRecord(this.inputFields, inputField => inputField.value) as Values;
    }

    public get error(): InputError | null {
        if (this.status === 'valid')
            return null;
        return this.statusMessages[this.status];
    }

    public field<Key extends keyof Values>(key: Key): InputField<Values[Key]> {
        return this.inputFields[key];
    }

    public evaluate(): ValidationResult {
        this.status = 'valid';
        let result: ValidationResult = 'valid';
        for (const field of values(this.inputFields)) {
            if (field.evaluate() === 'invalid') {
                this.status = 'invalidInput';
                result = 'invalid';
            }
        }
        return result;
    }

    public reset() {
        this.status = 'valid';
        for (const inputField of values(this.inputFields))
            inputField.reset();
    }
}
