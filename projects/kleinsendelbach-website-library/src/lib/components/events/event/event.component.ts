import { Component, Input } from '@angular/core';
import { DeviceTypeService } from '../../../services';
import { UtcDate, Event, Link } from '../../../types';
import { CommonModule } from '@angular/common';
import { LinkDirective } from '../../../directives';

@Component({
    selector: 'event',
    standalone: true,
    imports: [CommonModule, LinkDirective],
    templateUrl: './event.component.html',
    styleUrl: './event.component.sass'
})
export class EventComponent {

    @Input({ required: true }) public event!: Event;

    constructor(
        public readonly deviceType: DeviceTypeService
    ) {}

    public get isRecent(): boolean {
        const referenceDate = UtcDate.now.advanced({ day: 3 });
        return this.event.date.compare(referenceDate) !== 'greater';
    }

    public get link(): Link | null {
        if (this.event.link === null)
            return null;
        return Link.external(this.event.title, this.event.link);
    }
}
