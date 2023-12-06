import { Component, Input } from '@angular/core';
import { ContactsData, TrackBy } from '../../types';
import { DeviceTypeService } from '../../services';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent {

    @Input() public contactsData!: ContactsData;

    public TrackBy = TrackBy;

    constructor(
        public readonly deviceType: DeviceTypeService
    ) {}
}
