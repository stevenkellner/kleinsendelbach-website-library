import { Component, Input } from '@angular/core';
import { DeviceTypeService } from '../../services';
import { HeaderData } from '../../types';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { DesktopHeaderComponent } from './desktop-header/desktop-header.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'header',
    standalone: true,
    imports: [CommonModule, DesktopHeaderComponent, MobileHeaderComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.sass'
})
export class HeaderComponent<HeaderKey extends string, InternalPathKey extends string> {

    @Input({ required: true }) public headerData!: HeaderData<HeaderKey, InternalPathKey>;

    constructor(
        public readonly deviceType: DeviceTypeService
    ) {}
}
