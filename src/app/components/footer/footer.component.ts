import { Component } from '@angular/core';
import { FooterData, Link } from 'kleinsendelbach-website-library';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {
    public footerData: FooterData = {
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
                street: 'Meine Straße',
                city: 'Meine Stadt',
                telephone: {
                    number: '1234',
                    text: '1234'
                }
            }
        ]
    };
}
