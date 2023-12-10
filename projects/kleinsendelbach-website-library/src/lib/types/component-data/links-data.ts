import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Link } from "../link";

export type LinksData<InternalPath extends string> = LinkData<InternalPath>[];

export type LinkData<InternalPath extends string> = {
    link: Link | InternalPath;
    icon: {
        name: IconProp;
        animation: 'jump' | 'rotation' | 'shake';
    } | null;
    title: string;
    subtitle: string;
};
