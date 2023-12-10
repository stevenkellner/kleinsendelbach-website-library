import { EventListener } from '../event-listener';
import { InputError } from './input-error';
import { ValidationResult } from './validation-result';
import { Validator } from './validator';

export class InputField<T> {

    public readonly listener = new EventListener<T>();

    private fieldValue: T;

    private isTouched = false;

    private isEvalutated = false;

    public constructor(
        private _initialValue: T,
        private readonly validators: Validator<T>[] = []
    ) {
        this.fieldValue = _initialValue;
        this.listener.emitValue(this.fieldValue);
    }

    public get value(): T {
        return this.fieldValue;
    }

    public get error(): InputError | null {
        if (!this.isTouched && !this.isEvalutated)
            return null;
        for (const validator of this.validators) {
            if (validator.isValid(this.fieldValue) === 'invalid') {
                return {
                    level: 'error',
                    message: validator.errorMessage
                };
            }
        }
        return null;
    }

    public set initialValue(value: T) {
        this._initialValue = value;
        this.fieldValue = value;
        this.listener.emitValue(this.fieldValue);
    }

    public set inputValue(value: T) {
        this.isTouched = true;
        this.fieldValue = value;
        this.listener.emitValue(this.fieldValue);
    }

    public evaluate(): ValidationResult {
        this.isEvalutated = true;
        for (const validator of this.validators) {
            if (validator.isValid(this.fieldValue) === 'invalid')
                return 'invalid';
        }
        return 'valid';
    }

    public reset() {
        this.fieldValue = this._initialValue;
        this.listener.emitValue(this.fieldValue);
        this.isTouched = false;
        this.isEvalutated = false;
    }
}
