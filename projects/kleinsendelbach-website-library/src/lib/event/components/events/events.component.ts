import { Component, Input, OnInit } from '@angular/core';
import { EventGroup } from '../../types';
import { DeviceTypeService, Link, Result, TrackBy, mapRecord, mapRecordToArray, recordEntries, recordValues } from '../../../common';

@Component({
    selector: 'events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.sass']
})
export class EventsComponent<GroupId extends string> implements OnInit {

    @Input() public eventGroupsResult!: Result<EventGroup<GroupId>[]> | null;

    @Input() public eventGroupTitle!: Record<GroupId, string>;

    @Input() public getCalendarSubscriptionLink!: (eventGroupIds: GroupId[]) => string;

    public TrackBy = TrackBy;

    public expandedEventGroupId: GroupId | null = null;

    public isCalendarSubscriptionSeletionShown = false;

    public calendarSubscriptionSelection: Record<GroupId, boolean> = {} as Record<GroupId, boolean>;

    public constructor(
        public readonly deviceType: DeviceTypeService
    ) {}

    public ngOnInit() {
        this.calendarSubscriptionSelection = mapRecord(this.eventGroupTitle, () => false);
    }

    public expandEventGroupClicked(id: GroupId) {
        this.expandedEventGroupId = this.expandedEventGroupId === id ? null : id;
    }

    public get eventGroupsDescription(): { id: GroupId, title: string }[] {
        return mapRecordToArray(this.eventGroupTitle, (value, key) => ({
            id: key,
            title: value
        }));
    }

    public get anyCalendarSubscriptionSelected(): boolean {
        return recordValues(this.calendarSubscriptionSelection).some(selected => selected);
    }

    public get calendarSubscriptionLink(): Link {
        const selectedEventGroupIds = recordEntries(this.calendarSubscriptionSelection).flatMap(entry => entry.value ? entry.key : []);
        const link = this.getCalendarSubscriptionLink(selectedEventGroupIds);
        return Link.external('ics-Kalender abonnieren', link);
    }

    public showCalendarSubscriptionSeletion() {
        this.isCalendarSubscriptionSeletionShown = true;
    }

    public hideCalendarSubscriptionSeletion() {
        this.isCalendarSubscriptionSeletionShown = false;
        this.calendarSubscriptionSelection = mapRecord(this.eventGroupTitle, () => false);
    }

    public selectEventGroupId(groupId: GroupId) {
        this.calendarSubscriptionSelection[groupId] = !this.calendarSubscriptionSelection[groupId];
    }
}
