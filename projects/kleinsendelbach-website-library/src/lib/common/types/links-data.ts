import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Link } from "./link";

export type LinksData = LinkData[];

export type LinkData = {
    link: Link;
    icon: {
        name: IconProp;
        animation: 'jump' | 'rotation' | 'shake';
    } | null;
    title: string;
    subtitle: string;
};
