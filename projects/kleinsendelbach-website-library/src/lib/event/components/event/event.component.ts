import { Component, Input } from '@angular/core';
import { Event } from '../../types';
import { DeviceTypeService, Link, UtcDate } from '../../../common';

@Component({
    selector: 'event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.sass']
})
export class EventComponent {

    @Input() public event!: Event;

    public constructor(
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
