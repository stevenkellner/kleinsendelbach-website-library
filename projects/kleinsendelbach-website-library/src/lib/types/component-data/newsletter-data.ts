import { SponsorsData } from "./sponsors-data";

export type NewsletterData = {
    name: string;
    month: string;
    year: string;
    logoSrc: string;
    title: string;
    description: string;
    unsubscribeLink: string | null;
    websiteLink: {
        title: string;
        link: string;
    };
    notCorrectShownLink: string;
    content: {
        title: string;
        imageSrc: string | null;
        items: {
            title: string;
            link: string | null;
            subitems: {
                title: string;
                subtitle: string | null;
            }[];
        }[];
    }[],
    socialMedia: {
        imageSrc: string;
        name: string;
        title: string;
        link: {
            title: string;
            link: string;
        };
    }[];
    sponsors: SponsorsData;
};
