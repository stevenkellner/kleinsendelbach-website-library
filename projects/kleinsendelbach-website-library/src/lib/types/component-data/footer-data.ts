import { Link } from "../link";

export type FooterData<InternalPathKey extends string> = {
    appearanceChangerShown: boolean;
    copyright: string;
    editLink: Link | InternalPathKey | null;
    links: FooterLink<InternalPathKey>[],
    contacts: FooterContact[]
}

export type FooterLink<InternalPathKey extends string> = {
    title: string;
    link: Link | InternalPathKey;
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
