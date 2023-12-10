import { Component, Input } from '@angular/core';
import { DeviceTypeService, AppearanceService } from '../../services';
import { FooterData, TrackBy, FooterContact } from '../../types';
import { CommonModule } from '@angular/common';
import { LinkDirective } from '../../directives';
import { ButtonComponent } from '../button/button.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { AppearanceChangerComponent } from '../appearance-changer/appearance-changer.component';

@Component({
    selector: 'footer',
    standalone: true,
    imports: [CommonModule, LinkDirective, ButtonComponent, FontAwesomeModule, AppearanceChangerComponent],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.sass'
})
export class FooterComponent<InternalPath extends string> {

    @Input() public footerData!: FooterData<InternalPath>;

    public TrackBy = TrackBy;

    constructor(
        public readonly deviceType: DeviceTypeService,
        public readonly appearanceService: AppearanceService,
        private readonly faIconLibrary: FaIconLibrary
    ) {
        this.faIconLibrary.addIconPacks(fas, far, fab);
    }

    public hasContactOptions(contact: FooterContact): boolean {
        return contact.address !== null || contact.phone !== null || contact.mobile !== null || contact.email !== null;
    }
}
