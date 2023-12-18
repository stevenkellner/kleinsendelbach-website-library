export type Element<T extends unknown[]> = T extends (infer U)[] ? U : never;

export function includesAll<T>(array: T[], expectedElements: T[]): boolean {
    for (const expectedElement of expectedElements) {
        if (!array.includes(expectedElement))
            return false;
    }
    return true;
}

export function compactMap<T, U>(array: T[], callbackFn: (value: T, index: number, array: T[]) => U | null | undefined): U[] {
    return array
        .flatMap((value, index, _array) => {
            const mappedValue = callbackFn(value, index, _array);
            if (mappedValue === null || mappedValue === undefined)
                return [];
            return { wrapped: mappedValue };
        })
        .map(value => value.wrapped);
}

export function mapExisting<T, U>(array: (T | null | undefined)[], callbackFn: (value: T, index: number, array: T[]) => U): U[] {
    return compactMap(array, value => value)
        .map(callbackFn);
}


export function group<T>(array: T[], count: number): T[][] {
    return array.reduce<T[][]>((newArray, item) => {
        if (newArray.length === 0 || newArray[newArray.length - 1].length === count)
            newArray.push([]);
        newArray[newArray.length - 1].push(item);
        return newArray;
    }, []);
}
