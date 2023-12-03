export type SelectOptions<T extends string> = SelectOptions.Grouped<T> | SelectOptions.Ungrouped<T>;

export namespace SelectOptions {
    export interface Grouped<T extends string> {
        type: 'grouped';
        groups: {
            title: string;
            options: Option<T>[];
        }[];
    }

    export interface Ungrouped<T extends string> {
        type: 'ungrouped';
        options: Option<T>[];
    }

    export interface Option<T extends string> {
        id: T;
        text: string;
    }

    export function grouped<T extends string>(groups: {
        title: string;
        options: Option<T>[];
    }[]): SelectOptions.Grouped<T> {
        return {
            groups: groups,
            type: 'grouped'
        };
    }

    export function ungrouped<T extends string>(options: Option<T>[]): SelectOptions.Ungrouped<T> {
        return {
            options: options,
            type: 'ungrouped'
        };
    }
}
