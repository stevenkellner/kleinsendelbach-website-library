import { DeviceType } from "../device-type";
import { Link } from "../link";

export type HeaderData<Key extends string, InternalPath extends string> = {
    name: string;
    logoSrc: string;
    homeLink: Link | InternalPath;
    items: Record<Key, Omit<HeaderItem<Key, InternalPath>, 'key'>>;
    sorting: Record<DeviceType, {
        topItem: Key;
        subItems: Key[] | null;
    }[]>
}

export type HeaderItem<Key extends string, InternalPath extends string> = {
    key: Key;
    title: string;
    link: Link | InternalPath;
}

export type HeaderColumn<Key extends string, InternalPath extends string> = {
    key: Key;
    topItem: Omit<HeaderItem<Key, InternalPath>, 'key'>;
    subItems: HeaderItem<Key, InternalPath>[] | null;
}
