import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Link } from "../link";

export type LinksData<InternalPathKey extends string> = LinkData<InternalPathKey>[];

export type LinkData<InternalPathKey extends string> = {
    link: Link | InternalPathKey;
    icon: {
        name: IconProp;
        animation: 'jump' | 'rotation' | 'shake';
    } | null;
    title: string;
    subtitle: string;
};
