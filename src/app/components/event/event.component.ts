import { Component } from '@angular/core';
import { EventGroup, Guid, Result, UtcDate } from 'kleinsendelbach-website-library';

export type EventGroupId = 'group-1' | 'group-2' | 'group-3';

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.sass']
})
export class EventComponent {

    public eventGroupsResult1:  Result<EventGroup<EventGroupId>[]> | null = null;

    public eventGroupsResult2:  Result<EventGroup<EventGroupId>[]> | null = Result.failure('Es gab einen Fehler');

    public eventGroupsResult3:  Result<EventGroup<EventGroupId>[]> | null = Result.success([]);

    public eventGroupsResult4:  Result<EventGroup<EventGroupId>[]> | null = Result.success([
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
                    title: 'Event 2',
                    subtitle: 'Subtitle 2',
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
    ]);

    public eventGroupTitle: Record<EventGroupId, string> = {
        'group-1': 'Group 1',
        'group-2': 'Group 2',
        'group-3': 'Group 3'
    };

    public getCalendarSubscriptionLink(eventGroupIds: EventGroupId[]): string {
        return 'asdf';
    }
}
