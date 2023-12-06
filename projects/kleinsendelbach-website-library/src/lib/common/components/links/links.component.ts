import { TrackBy } from 'projects/kleinsendelbach-website-library/src/lib/common';
import { Component, Input } from '@angular/core';
import { LinksData } from '../../types';
import { DeviceTypeService } from '../../services';

@Component({
    selector: 'links',
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.sass']
})
export class LinksComponent {

    @Input() public linksData!: LinksData;

    public TrackBy = TrackBy;

    constructor(
        public readonly deviceType: DeviceTypeService
    ) {}
}
