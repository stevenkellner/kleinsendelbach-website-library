import { Component, Input } from '@angular/core';
import { HeaderData } from '../../types';
import { DeviceTypeService } from '../../../common';

@Component({
    selector: 'header',
    styleUrls: ['./header.component.sass'],
    templateUrl: './header.component.html'
})
export class HeaderComponent<HeaderKey extends string> {

    @Input() public headerData!: HeaderData<HeaderKey>;

    constructor(
        public readonly deviceType: DeviceTypeService
    ) {}
}
