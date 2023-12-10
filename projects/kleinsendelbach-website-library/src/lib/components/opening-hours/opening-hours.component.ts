import { Component, Input } from '@angular/core';
import { OpeningHoursData, TrackBy } from '../../types';
import { DeviceTypeService } from '../../services';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'opening-hours',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './opening-hours.component.html',
    styleUrl: './opening-hours.component.sass'
})
export class OpeningHoursComponent {

    @Input() public openingHoursData!: OpeningHoursData;

    public TrackBy = TrackBy;

    constructor(
        public readonly deviceType: DeviceTypeService
    ) {}

}
