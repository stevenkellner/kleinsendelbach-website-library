import { DeviceType, Link } from "../../common";

export type HeaderData<Key extends string> = {
    name: string;
    logoSrc: string;
    homeLink: Link;
    items: Record<Key, Omit<HeaderItem<Key>, 'key'>>;
    sorting: Record<DeviceType, {
        topItem: Key;
        subItems: Key[] | null;
    }[]>
}

export type HeaderItem<Key extends string> = {
    key: Key;
    title: string;
    link: Link;
}

export type HeaderColumn<Key extends string> = {
    key: Key;
    topItem: Omit<HeaderItem<Key>, 'key'>;
    subItems: HeaderItem<Key>[] | null;
}
