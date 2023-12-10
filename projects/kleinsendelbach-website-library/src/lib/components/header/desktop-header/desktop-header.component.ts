import { Component, Input } from '@angular/core';
import { HeaderColumn, HeaderData, TrackBy } from '../../../types';
import { DeviceTypeService } from '../../../services';
import { CommonModule } from '@angular/common';
import { DesktopHeaderItemComponent } from '../desktop-header-item/desktop-header-item.component';
import { LinkDirective } from '../../../directives';

@Component({
    selector: 'desktop-header',
    standalone: true,
    imports: [CommonModule, DesktopHeaderItemComponent, LinkDirective],
    templateUrl: './desktop-header.component.html',
    styleUrl: './desktop-header.component.sass'
})
export class DesktopHeaderComponent<HeaderKey extends string, InternalPath extends string> {

    @Input() public headerData!: HeaderData<HeaderKey, InternalPath>;

    public TrackBy = TrackBy;

    public expandedHeaderColumnKey: HeaderKey | null = null;

    constructor(
        public readonly deviceType: DeviceTypeService
    ) {}

    public get headerColumns(): HeaderColumn<HeaderKey, InternalPath>[] {
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
