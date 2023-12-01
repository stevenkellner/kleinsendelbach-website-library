import { Component, Input } from '@angular/core';
import { HeaderColumn, HeaderData } from '../../types';
import { DeviceTypeService, TrackBy } from '../../../common';

@Component({
    selector: 'mobile-header',
    styleUrls: ['./mobile-header.component.sass'],
    templateUrl: './mobile-header.component.html'
})
export class MobileHeaderComponent<HeaderKey extends string> {

    @Input() public headerData!: HeaderData<HeaderKey>;

    public TrackBy = TrackBy;

    public isExpanded = false;

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

    public handleHamburgerMenuClick(toExpanded: boolean) {
        this.isExpanded = toExpanded;
    }

    public handleTopItemClick(key: HeaderKey) {
        if (this.expandedHeaderColumnKey === key)
            this.expandedHeaderColumnKey = null;
        else
            this.expandedHeaderColumnKey = key;
    }
}
