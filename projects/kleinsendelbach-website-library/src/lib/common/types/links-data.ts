import { Link } from "./link";

export type LinksData = Record<string, LinkData>;

export type LinkData = {
    link: Link;
    title: string;
    subtitle: string;
};
