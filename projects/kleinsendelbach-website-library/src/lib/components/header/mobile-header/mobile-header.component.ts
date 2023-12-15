import { Component, Input } from '@angular/core';
import { DeviceTypeService } from '../../../services';
import { HeaderData, TrackBy, HeaderColumn } from '../../../types';
import { CommonModule } from '@angular/common';
import { LinkDirective } from '../../../directives';
import { MobileHeaderItemComponent } from '../mobile-header-item/mobile-header-item.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'mobile-header',
    standalone: true,
    imports: [CommonModule, LinkDirective, MobileHeaderItemComponent, FontAwesomeModule],
    templateUrl: './mobile-header.component.html',
    styleUrl: './mobile-header.component.sass'
})
export class MobileHeaderComponent<HeaderKey extends string, InternalPathKey extends string> {

    @Input({ required: true }) public headerData!: HeaderData<HeaderKey, InternalPathKey>;

    public TrackBy = TrackBy;

    public isExpanded = false;

    public expandedHeaderColumnKey: string | null = null;

    constructor(
        public readonly deviceType: DeviceTypeService,
        private readonly faIconLibrary: FaIconLibrary
    ) {
        this.faIconLibrary.addIconPacks(fas, far, fab);
    }

    public get headerColumns(): HeaderColumn<HeaderKey, InternalPathKey>[] {
        return HeaderData.toHeaderColumns(this.headerData, this.deviceType.current);
    }

    public handleHamburgerMenuClick(toExpanded: boolean) {
        this.isExpanded = toExpanded;
    }

    public handleTopItemClick(key: string) {
        if (this.expandedHeaderColumnKey === key)
            this.expandedHeaderColumnKey = null;
        else
            this.expandedHeaderColumnKey = key;
    }
}
