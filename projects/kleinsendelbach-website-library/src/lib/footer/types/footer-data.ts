import { Link } from "../../common";

export type FooterData = {
    appearanceChangerShown: boolean;
    copyright: string;
    editLink: Link | null;
    links: FooterLink[],
    contacts: FooterContact[]
}

export type FooterLink = {
    title: string;
    link: Link;
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
