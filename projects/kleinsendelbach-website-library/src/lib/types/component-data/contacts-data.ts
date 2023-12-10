export type ContactsData = ContactData[];

export type ContactData = {
    function: string;
    name: string;
    profileImageSrc: string | null;
    phone: string | null;
    mobile: string | null;
    email: string | null;
};
