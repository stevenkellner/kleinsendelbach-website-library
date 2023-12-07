import { Component, Input } from '@angular/core';
import { SquadData, TrackBy } from '../../types';
import { DeviceTypeService } from '../../services';

@Component({
    selector: 'squad',
    templateUrl: './squad.component.html',
    styleUrls: ['./squad.component.sass']
})
export class SquadComponent {

    @Input() public squadData!: SquadData;

    public TrackBy = TrackBy;

    constructor(
        public readonly deviceType: DeviceTypeService
    ) {}
}
