import { AppearanceService } from './../../../common/services/appearance.service';
import { Component, Input } from '@angular/core';
import { FooterContact, FooterData } from '../../types';
import { DeviceTypeService, TrackBy } from '../../../common';

@Component({
    selector: 'footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.sass']
})
export class FooterComponent {

    @Input() public footerData!: FooterData;

    public TrackBy = TrackBy;

    constructor(
        public readonly deviceType: DeviceTypeService,
        public readonly appearanceService: AppearanceService
    ) {}

    public hasContactOptions(contact: FooterContact): boolean {
        return contact.address !== null || contact.phone !== null || contact.mobile !== null || contact.email !== null;
    }
}