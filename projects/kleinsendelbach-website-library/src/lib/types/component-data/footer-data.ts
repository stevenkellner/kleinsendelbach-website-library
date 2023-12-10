import { Link } from "../link";

export type FooterData<InternalPath extends string> = {
    appearanceChangerShown: boolean;
    copyright: string;
    editLink: Link | InternalPath | null;
    links: FooterLink<InternalPath>[],
    contacts: FooterContact[]
}

export type FooterLink<InternalPath extends string> = {
    title: string;
    link: Link | InternalPath;
}

export type FooterContact = {
    function: string;
    name: string;
    address: {
        street: string;
        city: string;
    } | null;
    phone: string | null;
    mobile: string | null;
    email: string | null;
}
