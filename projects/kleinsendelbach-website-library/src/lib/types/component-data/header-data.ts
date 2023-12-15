import { DeviceType } from "../device-type";
import { Link } from "../link";

export type HeaderData<Key extends string, InternalPathKey extends string> = {
    name: string;
    logoSrc: string;
    homeLink: Link | InternalPathKey;
    items: Record<Key, Omit<HeaderItem<Key, InternalPathKey>, 'key'>>;
    sorting: Record<DeviceType, ({
        topItem: Key;
    } | {
        key: string;
        title: string;
        subItems: Key[];
    })[]>
}

export type HeaderItem<Key extends string, InternalPathKey extends string> = {
    key: Key;
    title: string;
    link: Link | InternalPathKey;
}

export type HeaderColumn<Key extends string, InternalPathKey extends string> = HeaderItem<Key, InternalPathKey> | {
    key: string;
    title: string;
    subItems: HeaderItem<Key, InternalPathKey>[];
}

export namespace HeaderData {
    export function toHeaderColumns<HeaderKey extends string, InternalPathKey extends string>(headerData: HeaderData<HeaderKey, InternalPathKey>, deviceType: DeviceType): HeaderColumn<HeaderKey, InternalPathKey>[] {
        return headerData.sorting[deviceType].map(headerColumn => ('subItems' in headerColumn ? {
            key: headerColumn.key,
            title: headerColumn.title,
            subItems: headerColumn.subItems.map(key => ({
                key: key,
                ...headerData.items[key]
            }))
        } : {
            key: headerColumn.topItem,
            ...headerData.items[headerColumn.topItem]
        }));
    }
}

export namespace HeaderColumn {
    export function isOnlyTopItem<HeaderKey extends string, InternalPathKey extends string>(headerColumn: HeaderColumn<HeaderKey, InternalPathKey>): headerColumn is HeaderItem<HeaderKey, InternalPathKey> {
        return !('subItems' in headerColumn)
    }
}
