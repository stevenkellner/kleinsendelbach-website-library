export type SquadData = {
    title: string;
    persons: SquadPerson[];
}[];

export type SquadPerson = {
    imageSrc: string | null;
    name: string;
    additionalText: string | null;
}
