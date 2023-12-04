import { Guid, UtcDate } from "../../common";

export type Event = {
    id: Guid;
    date: UtcDate;
    title: string;
    subtitle: string | null;
    isImportant: boolean;
    link: string | null;
}

export namespace Event {
    export type Flatten = {
        id: string;
        date: string;
        title: string;
        subtitle: string | null;
        isImportant: boolean;
        link: string | null;
    }

    export function flatten(event: Event): Event.Flatten;
    export function flatten(event: Omit<Event, 'id'>): Omit<Event.Flatten, 'id'>;
    export function flatten(event: Event | Omit<Event, 'id'>): Event.Flatten | Omit<Event.Flatten, 'id'> {
        return {
            ...'id' in event ? { id: event.id.guidString } : {},
            date: event.date.encoded,
            isImportant: event.isImportant,
            link: event.link,
            subtitle: event.subtitle,
            title: event.title
        };
    }

    export function concrete(event: Event.Flatten): Event;
    export function concrete(event: Omit<Event.Flatten, 'id'>): Omit<Event, 'id'>;
    export function concrete(event: Event.Flatten | Omit<Event.Flatten, 'id'>): Event | Omit<Event, 'id'> {
        return {
            ...'id' in event ? { id: new Guid(event.id) } : {},
            date: UtcDate.decode(event.date),
            isImportant: event.isImportant,
            link: event.link,
            subtitle: event.subtitle,
            title: event.title
        };
    }
}
