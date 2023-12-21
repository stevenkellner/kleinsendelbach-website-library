interface IResult<Content, Failure = any> {
    value: Content | null;
    error: Failure | null;

    isSuccess(): this is Result.Success<Content>;
    isFailure(): this is Result.Failure<Failure>;

    get(): Content;

    map<NewContent>(mapper: (value: Content) => NewContent): IResult<NewContent, Failure>;
    mapError<NewFailure>(mapper: (error: Failure) => NewFailure): IResult<Content, NewFailure>;
    mapResult<T>(mapSuccess: (value: Content) => T, mapFailure: (error: Failure) => T): T;
}

export type Result<Content, Failure = any> = Result.Success<Content> | Result.Failure<Failure>;

export namespace Result {
    export class Success<Content> implements IResult<Content, never> {
        public readonly error = null;

        constructor(
            public readonly value: Content
        ) {}

        public isSuccess(): this is Result.Success<Content> {
            return true;
        }

        public isFailure(): this is Result.Failure<never> {
            return false;
        }

        public get(): Content {
            return this.value;
        }

        public map<NewContent>(mapper: (value: Content) => NewContent): Result.Success<NewContent> {
            return new Result.Success(mapper(this.value));
        }

        public mapError<T>(mapper: (error: never) => T): Result.Success<Content> {
            return this;
        }

        public mapResult<T>(mapSuccess: (value: Content) => T, mapFailure: (error: never) => T): T {
            return mapSuccess(this.value);
        }
    }

    export class Failure<Failure = any> implements IResult<never, Failure> {
        public readonly value = null;

        constructor(
            public readonly error: Failure
        ) {}

        public isSuccess(): this is Result.Success<never> {
            return false;
        }

        public isFailure(): this is Result.Failure<Failure> {
            return true;
        }

        public get(): never {
            throw this.error;
        }

        public map<T>(mapper: (value: never) => T): Result.Failure<Failure> {
            return this;
        }

        public mapError<NewFailure>(mapper: (error: Failure) => NewFailure): Result.Failure<NewFailure> {
            return new Result.Failure(mapper(this.error));
        }

        public mapResult<T>(mapSuccess: (value: never) => T, mapFailure: (error: Failure) => T): T {
            return mapFailure(this.error);
        }
    }

    export function fromObject<Content, Failure>(object: { state: 'success'; value: Content } | { state: 'failure'; error: Failure }): Result<Content, Failure> {
        if (object.state === 'success')
            return Result.success(object.value);
        return Result.failure(object.error);
    }

    export function merge<Content, Failure>(...results: [Result<Content, Failure>, ...Result<Content, Failure>[]]): Result<void, Failure> {
        for (const result of results) {
            if (result.isFailure())
                return Result.failure(result.error);
        }
        return Result.success();
    }

    export function success<Content>(value: Content): Result.Success<Content>;
    export function success(): Result.Success<void>;
    export function success<Content>(value?: Content): Result.Success<Content | void> {
        return new Result.Success(value);
    }

    export function failure<Failure>(error: Failure): Result.Failure<Failure> {
        return new Result.Failure(error);
    }
}
