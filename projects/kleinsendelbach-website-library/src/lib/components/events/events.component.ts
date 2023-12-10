import { Component, Input, OnInit } from '@angular/core';
import { EventGroup, Link, TrackBy, entries, mapRecord, values } from '../../types';
import { CommonModule } from '@angular/common';
import { EventGroupComponent } from './event-group/event-group.component';
import { ButtonComponent } from '../button/button.component';
import { DeviceTypeService } from '../../services';

@Component({
  selector: 'events',
  standalone: true,
  imports: [CommonModule, EventGroupComponent, ButtonComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.sass'
})
export class EventsComponent<GroupId extends string> implements OnInit {

    @Input() public eventGroups!: EventGroup<GroupId>[];

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
        return entries(this.eventGroupTitle).map(({key, value}) => ({
            id: key,
            title: value
        }));
    }

    public get anyCalendarSubscriptionSelected(): boolean {
        return values(this.calendarSubscriptionSelection).some(selected => selected);
    }

    public get calendarSubscriptionLink(): Link {
        const selectedEventGroupIds = entries(this.calendarSubscriptionSelection).flatMap(entry => entry.value ? entry.key : []);
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
