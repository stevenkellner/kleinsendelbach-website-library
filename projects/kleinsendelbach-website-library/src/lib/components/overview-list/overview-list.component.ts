import { Component, Input } from '@angular/core';
import { OverviewListData, TrackBy } from '../../types';
import { DeviceTypeService } from '../../services';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { ListComponent } from '../list/list.component';

@Component({
    selector: 'overview-list',
    standalone: true,
    imports: [CommonModule, ListComponent, ButtonComponent],
    templateUrl: './overview-list.component.html',
    styleUrl: './overview-list.component.sass'
})
export class OverviewListComponent<InternalPath extends string> {

    @Input() public overviewListData!: OverviewListData<InternalPath>;

    public TrackBy = TrackBy;

    constructor(
        public readonly deviceType: DeviceTypeService
    ) {}
}
