import { Component, Input } from '@angular/core';
import { ContactsData, TrackBy } from '../../types';
import { DeviceTypeService } from '../../services';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'contacts',
    standalone: true,
    imports: [CommonModule, FontAwesomeModule],
    templateUrl: './contacts.component.html',
    styleUrl: './contacts.component.sass'
})
export class ContactsComponent {

    @Input() public contactsData!: ContactsData;

    public TrackBy = TrackBy;

    constructor(
        public readonly deviceType: DeviceTypeService,
        private readonly faIconLibrary: FaIconLibrary
    ) {
        this.faIconLibrary.addIconPacks(fas, far, fab);
    }

}
