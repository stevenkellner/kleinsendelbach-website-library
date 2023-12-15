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
export class DesktopHeaderComponent<HeaderKey extends string, InternalPathKey extends string> {

    @Input({ required: true }) public headerData!: HeaderData<HeaderKey, InternalPathKey>;

    public TrackBy = TrackBy;

    public expandedHeaderColumnKey: string | null = null;

    constructor(
        public readonly deviceType: DeviceTypeService
    ) {}

    public get headerColumns(): HeaderColumn<HeaderKey, InternalPathKey>[] {
        return HeaderData.toHeaderColumns(this.headerData, this.deviceType.current);
    }

    public handleTopItemClick(key: string) {
        if (this.expandedHeaderColumnKey === key)
            this.expandedHeaderColumnKey = null;
        else
            this.expandedHeaderColumnKey = key;
    }
}
