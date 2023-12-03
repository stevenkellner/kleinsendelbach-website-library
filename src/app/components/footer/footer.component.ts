import { Component } from '@angular/core';
import { FooterData, Link } from 'kleinsendelbach-website-library';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {
    public footerData: FooterData = {
        appearanceChangerShown: true,
        copyright: 'Copyright text',
        editLink: Link.external('Bearbeiten', 'https://www.google.com'),
        links: [
            {
                title: 'Link 1',
                link: Link.external('Link-1', 'https://www.google.com')
            },
            {
                title: 'Link 2',
                link: Link.external('Link-3', 'https://www.google.com')
            },
            {
                title: 'Link 3',
                link: Link.external('Link-4', 'https://www.google.com')
            }
        ],
        contacts: [
            {
                name: 'Max Mustermann',
                function: 'Vorstand',
                address: {
                    street: 'Meine Straße',
                    city: 'Meine Stadt'
                },
                phone: '1234',
                mobile: null,
                email: 'test@mail'
            },
            {
                name: 'Max Mustermann',
                function: 'Vorstand',
                address: {
                    street: 'Meine Straße',
                    city: 'Meine Stadt'
                },
                phone: '5678',
                mobile: '9012',
                email: 'my-test@mail'
            },
            {
                name: 'Max Mustermann',
                function: 'Vorstand',
                address: null,
                phone: null,
                mobile: null,
                email: null,
            }
        ]
    };
}
