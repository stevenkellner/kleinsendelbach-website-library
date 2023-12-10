import { Component } from '@angular/core';
import { EventGroup, EventsComponent, Guid, UtcDate } from 'kleinsendelbach-website-library';

export type EventGroupId = 'group-1' | 'group-2' | 'group-3';

@Component({
    selector: 'event-page',
    standalone: true,
    imports: [EventsComponent],
    templateUrl: './event.page.html',
    styleUrls: ['./event.page.sass']
})
export class EventPage {

    public eventGroups1:  EventGroup<EventGroupId>[] = [];

    public eventGroups2:  EventGroup<EventGroupId>[] = [
        {
            groupId: 'group-2',
            events: [
                {
                    id: Guid.newGuid(),
                    date: UtcDate.now.advanced({ day: 1 }),
                    title: 'Event 1',
                    subtitle: 'Subtitle 1',
                    isImportant: false,
                    link: null
                },
                {
                    id: Guid.newGuid(),
                    date: UtcDate.now.advanced({ day: 5 }),
                    title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
                    subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    isImportant: true,
                    link: null
                },
                {
                    id: Guid.newGuid(),
                    date: UtcDate.now.advanced({ day: 1 }),
                    title: 'Event 3',
                    subtitle: null,
                    isImportant: false,
                    link: 'link-3'
                },
                {
                    id: Guid.newGuid(),
                    date: UtcDate.now.advanced({ day: 5 }),
                    title: 'Event 4',
                    subtitle: null,
                    isImportant: false,
                    link: null
                },
                {
                    id: Guid.newGuid(),
                    date: UtcDate.now.advanced({ day: 5 }),
                    title: 'Event 5',
                    subtitle: 'Subtitle 5',
                    isImportant: false,
                    link: 'link-5'
                },
                {
                    id: Guid.newGuid(),
                    date: UtcDate.now.advanced({ day: 5 }),
                    title: 'Event 6',
                    subtitle: 'Subtitle 6',
                    isImportant: false,
                    link: 'link-6'
                }
            ]
        },
        {
            groupId: 'group-3',
            events: [
                {
                    id: Guid.newGuid(),
                    date: UtcDate.now.advanced({ day: 5 }),
                    title: 'Event 7',
                    subtitle: 'Subtitle 7',
                    isImportant: false,
                    link: 'link-7'
                }
            ]
        }
    ];

    public eventGroupTitle: Record<EventGroupId, string> = {
        'group-1': 'Group 1',
        'group-2': 'Group 2',
        'group-3': 'Group 3'
    };

    public getCalendarSubscriptionLink(eventGroupIds: EventGroupId[]): string {
        return 'asdf';
    }
}
