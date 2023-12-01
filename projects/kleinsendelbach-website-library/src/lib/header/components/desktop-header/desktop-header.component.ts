import { Component, Input } from '@angular/core';
import { HeaderColumn, HeaderData } from '../../types';
import { DeviceTypeService, TrackBy } from '../../../common';

@Component({
    selector: 'desktop-header',
    styleUrls: ['./desktop-header.component.sass'],
    templateUrl: './desktop-header.component.html'
})
export class DesktopHeaderComponent<HeaderKey extends string> {

    @Input() public headerData!: HeaderData<HeaderKey>;

    public TrackBy = TrackBy;

    public expandedHeaderColumnKey: HeaderKey | null = null;

    constructor(
        public readonly deviceType: DeviceTypeService
    ) {}

    public get headerColumns(): HeaderColumn<HeaderKey>[] {
        return this.headerData.sorting[this.deviceType.current].map(headerColumn => ({
            key: headerColumn.topItem,
            topItem: this.headerData.items[headerColumn.topItem],
            subItems: headerColumn.subItems ? headerColumn.subItems.map(key => ({
                key: key,
                ...this.headerData.items[key]
            })) : null
        }));
    }

    public handleTopItemClick(key: HeaderKey) {
        if (this.expandedHeaderColumnKey === key)
            this.expandedHeaderColumnKey = null;
        else
            this.expandedHeaderColumnKey = key;
    }
}
