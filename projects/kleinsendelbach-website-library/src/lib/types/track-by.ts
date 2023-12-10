import { Guid } from './guid';

export namespace TrackBy {
    export function identity<T>(_index: number, value: T): T {
        return value;
    }

    export function id(_index: number, value: { id: Guid }): string;
    export function id<T>(_index: number, value: { id: T }): T;
    export function id<T>(_index: number, value: { id: Guid | T }): T | string {
        if (value.id instanceof Guid)
            return value.id.guidString;
        return value.id;
    }

    export function property<T, Key extends keyof T>(key: Key): (_index: number, value: T) => T[Key] {
        return (_index: number, value: T) => value[key];
    }
}
