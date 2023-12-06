import { Link } from "./link";

export type LinksData = LinkData[];

export type LinkData = {
    link: Link;
    title: string;
    subtitle: string;
};
