import { TrackBy } from 'projects/kleinsendelbach-website-library/src/lib/common';
import { Component, Input } from '@angular/core';
import { LinkData, LinksData, mapRecordToArray } from '../../types';
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

    public get links(): (LinkData & { id: string })[] {
        return mapRecordToArray(this.linksData, (link, id) => ({
            id: id,
            ...link
        }));
    }
}
