import { Event } from "./event";

export type EventGroup<Id extends string> = {
    groupId: Id;
    events: Event[];
}

export namespace EventGroup {
    export type Flatten<Id extends string> = {
        groupId: Id;
        events: Event.Flatten[];
    }

    export function flatten<Id extends string>(eventGroup: EventGroup<Id>): EventGroup.Flatten<Id> {
        return {
            groupId: eventGroup.groupId,
            events: eventGroup.events.map(event => Event.flatten(event))
        };
    }

    export function concrete<Id extends string>(eventGroup: EventGroup.Flatten<Id>): EventGroup<Id> {
        return {
            groupId: eventGroup.groupId,
            events: eventGroup.events.map(event => Event.concrete(event))
        };
    }
}
