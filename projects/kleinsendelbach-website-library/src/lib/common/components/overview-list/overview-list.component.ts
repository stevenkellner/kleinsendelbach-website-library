import { TrackBy } from 'projects/kleinsendelbach-website-library/src/lib/common';
import { Component, Input } from '@angular/core';
import { OverviewListData } from '../../types';
import { DeviceTypeService } from '../../services';

@Component({
    selector: 'overview-list',
    templateUrl: './overview-list.component.html',
    styleUrls: ['./overview-list.component.sass']
})
export class OverviewListComponent {

    @Input() public overviewListData!: OverviewListData;

    public TrackBy = TrackBy;

    constructor(
        public readonly deviceType: DeviceTypeService
    ) {}
}
