import { Component, Input } from '@angular/core';
import { OpeningHoursData, TrackBy } from '../../types';
import { DeviceTypeService } from '../../services';

@Component({
    selector: 'opening-hours',
    templateUrl: './opening-hours.component.html',
    styleUrls: ['./opening-hours.component.sass']
})
export class OpeningHoursComponent {

    @Input() public openingHoursData!: OpeningHoursData;

    public TrackBy = TrackBy;

    constructor(
        public readonly deviceType: DeviceTypeService
    ) {}
}
