import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventComponent } from '../event/event.component';
import { EventGroup, TrackBy, Event } from '../../../types';
import { ButtonComponent } from '../../button/button.component';

@Component({
    selector: 'event-group',
    standalone: true,
    imports: [CommonModule, EventComponent, ButtonComponent],
    templateUrl: './event-group.component.html',
    styleUrl: './event-group.component.sass'
})
export class EventGroupComponent<GroupId extends string> {

    @Input({ required: true }) public title!: string;

    @Input({ required: true }) public eventGroup!: EventGroup<GroupId>;

    @Input({ required: true }) public isExpanded!: boolean;

    @Output() public expandEventGroupClicked = new EventEmitter<void>();

    public TrackBy = TrackBy;

    public get events(): Event[] {
        if (this.isExpanded)
            return this.eventGroup.events;
        return this.eventGroup.events.slice(0, 5);
    }
}
