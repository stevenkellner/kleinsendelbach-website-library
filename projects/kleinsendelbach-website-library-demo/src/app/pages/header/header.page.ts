import { Component } from '@angular/core';
import { HeaderComponent, HeaderData, Link } from 'kleinsendelbach-website-library';

@Component({
    selector: 'header-page',
    standalone: true,
    imports: [HeaderComponent],
    templateUrl: './header.page.html',
    styleUrls: ['./header.page.sass']
})
export class HeaderPage {

    public headerData: HeaderData<'link-1' | 'link-2' | 'link-3' | 'link-4' | 'link-5' | 'link-6', never> = {
        name: 'Das ist ein Test',
        logoSrc: 'https://i.kym-cdn.com/entries/icons/facebook/000/007/217/Potatoe.jpg',
        homeLink: Link.external('Home', 'https://www.google.com'),
        items: {
            'link-1': {
                title: 'Link 1',
                link: Link.external('link-1', 'https://www.google.com')
            },
            'link-2': {
                title: 'Link 2',
                link: Link.external('link-2', 'https://www.google.com')
            },
            'link-3': {
                title: 'Link 3',
                link: Link.external('link-3', 'https://www.google.com')
            },
            'link-4': {
                title: 'Link 4',
                link: Link.external('link-4', 'https://www.google.com')
            },
            'link-5': {
                title: 'Link 5',
                link: Link.external('link-5', 'https://www.google.com')
            },
            'link-6': {
                title: 'Link 6',
                link: Link.external('link-6', 'https://www.google.com')
            }
        },
        sorting: {
            desktop: [{ topItem: 'link-1' }, { topItem: 'link-2' }, { topItem: 'link-3' }, { key: 'link-4', title: 'List 1', subItems: ['link-4', 'link-5', 'link-6'] }],
            tablet: [{ key: 'link-1', title: 'List 1', subItems: ['link-1', 'link-2', 'link-3'] }, { key: 'link-4', title: 'List 2', subItems: ['link-4', 'link-5', 'link-6'] }],
            mobile: [{ key: 'link-1', title: 'List 1', subItems: ['link-1', 'link-2', 'link-3'] }, { key: 'link-4', title: 'List 2', subItems: ['link-4', 'link-5', 'link-6'] }]
        }
    }
}
