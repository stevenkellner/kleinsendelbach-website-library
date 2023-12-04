import { TrackBy } from 'projects/kleinsendelbach-website-library/src/lib/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event, EventGroup } from '../../types';

@Component({
    selector: 'event-group',
    templateUrl: './event-group.component.html',
    styleUrls: ['./event-group.component.sass']
})
export class EventGroupComponent<GroupId extends string> {

    @Input() public title!: string;

    @Input() public eventGroup!: EventGroup<GroupId>;

    @Input() public isExpanded!: boolean;

    @Output() public expandEventGroupClicked = new EventEmitter<void>();

    public TrackBy = TrackBy;

    public get events(): Event[] {
        if (this.isExpanded)
            return this.eventGroup.events;
        return this.eventGroup.events.slice(0, 5);
    }
}
