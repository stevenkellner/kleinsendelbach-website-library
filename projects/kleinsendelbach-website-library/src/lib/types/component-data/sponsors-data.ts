export type SponsorsType = 'main' | 'normal' | 'small';

export type SponsorsData = Record<SponsorsType, Sponsor[] | null>;

export type Sponsor = {
    name: string;
    logoSrc: string;
    address: {
        streetName: string;
        cityName: string;
    };
    contact: {
        phone: string | null;
        email: string | null;
        website: string | null;
        socialMedia: {
            name: string;
            link: string;
        }[] | null;
    };
}
