import { ErrorLevel } from './error-level';

export class InputError {
    constructor(
        public readonly message: string,
        public readonly level: ErrorLevel = 'error'
    ) {}
}
