import { FunctionsErrorCodeCore as FirebaseFunctionErrorCode } from '@angular/fire/functions';
import { Result } from '../result';

export interface FirebaseFunctionError extends Error {
    name: 'FirebaseFunctionError';
    code: FirebaseFunctionErrorCode;
    message: string;
    details: unknown;
    stack?: string;
}

export type FirebaseFunctionResult<T> = Result<T, FirebaseFunctionError>;

