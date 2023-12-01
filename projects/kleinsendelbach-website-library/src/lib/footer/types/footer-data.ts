import { Link } from "../../common";

export type FooterData = {
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
    street: string;
    city: string;
    telephone: {
        number: string;
        text: string;
    };
}
