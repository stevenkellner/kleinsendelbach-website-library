import { values } from '../record-utils';
import { InputError } from './input-error';
import { InputField } from './input-field';
import { ValidationResult } from './validation-result';

export class InputForm<
    InputFields extends Record<string, InputField<any>>,
    ExtraStatus extends PropertyKey = never
> {
    public status: ExtraStatus | 'invalidInput' | 'valid' = 'valid';

    public constructor(
        private readonly inputFields: InputFields,
        private readonly statusMessages: Record<ExtraStatus | 'invalidInput', InputError>
    ) {}

    public get error(): InputError | null {
        if (this.status === 'valid')
            return null;
        return this.statusMessages[this.status];
    }

    public field<Key extends keyof InputFields>(key: Key): InputFields[Key] {
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
