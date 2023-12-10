import { Component } from '@angular/core';
import { ContactsComponent, ContactsData } from 'kleinsendelbach-website-library';

@Component({
    selector: 'contacts-page',
    standalone: true,
    imports: [ContactsComponent],
    templateUrl: './contacts.page.html',
    styleUrls: ['./contacts.page.sass']
})
export class ContactsPage {
    public contactsData: ContactsData = [
        {
            name: 'Max Mustermann',
            function: 'Vorstand',
            profileImageSrc: 'https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-12-512.png',
            phone: '1234',
            mobile: null,
            email: 'test@mail'
        },
        {
            name: 'Max Mustermann',
            function: 'Vorstand',
            profileImageSrc: null,
            phone: '5678',
            mobile: '9012',
            email: 'my-test@mail'
        },
        {
            name: 'Max Mustermann',
            function: 'Vorstand',
            profileImageSrc: 'https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-12-512.png',
            phone: null,
            mobile: null,
            email: null,
        },
        {
            name: 'Max Mustermann',
            function: 'Vorstand',
            profileImageSrc: null,
            phone: null,
            mobile: '9012',
            email: null
        },
        {
            name: 'Max Mustermann',
            function: 'Vorstand',
            profileImageSrc: 'https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-12-512.png',
            phone: '5678',
            mobile: '9012',
            email: 'my-test@mail'
        },
        {
            name: 'Max Mustermann',
            function: 'Vorstand',
            profileImageSrc: null,
            phone: null,
            mobile: '9012',
            email: null
        }
    ];
}
