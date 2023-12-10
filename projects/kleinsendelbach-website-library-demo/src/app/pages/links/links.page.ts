import { Component } from '@angular/core';
import { Link, LinksComponent, LinksData } from 'kleinsendelbach-website-library';

@Component({
    selector: 'links-page',
    standalone: true,
    imports: [LinksComponent],
    templateUrl: './links.page.html',
    styleUrls: ['./links.page.sass']
})
export class LinksPage {

    public linksData1: LinksData<never> = [
        {
            link: Link.external('Link 1', 'https://google.com'),
            icon: null,
            title: 'Link 1',
            subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
        },
        {
            link: Link.external('Link 2', 'https://google.com'),
            icon: null,
            title: 'Link 2',
            subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut'
        },
        {
            link: Link.external('Link 3', 'https://google.com'),
            icon: null,
            title: 'Link 3',
            subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
        },
        {
            link: Link.external('Link 4', 'https://google.com'),
            icon: null,
            title: 'Link 4',
            subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
        },
        {
            link: Link.external('Link 5', 'https://google.com'),
            icon: null,
            title: 'Link 5',
            subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut'
        },
        {
            link: Link.external('Link 6', 'https://google.com'),
            icon: null,
            title: 'Link 6',
            subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
        }
    ];

    public linksData2: LinksData<never> = [
        {
            link: Link.external('Link 1', 'https://google.com'),
            icon: {
                name: 'person',
                animation: 'jump'
            },
            title: 'Link 1',
            subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
        },
        {
            link: Link.external('Link 2', 'https://google.com'),
            icon: {
                name: 'address-card',
                animation: 'rotation'
            },
            title: 'Link 2',
            subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut'
        },
        {
            link: Link.external('Link 3', 'https://google.com'),
            icon: {
                name: 'info',
                animation: 'shake'
            },
            title: 'Link 3',
            subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
        },
        {
            link: Link.external('Link 4', 'https://google.com'),
            icon: {
                name: 'football',
                animation: 'rotation'
            },
            title: 'Link 4',
            subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
        },
        {
            link: Link.external('Link 5', 'https://google.com'),
            icon: {
                name: 'money-bill',
                animation: 'rotation'
            },
            title: 'Link 5',
            subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut'
        },
        {
            link: Link.external('Link 6', 'https://google.com'),
            icon: {
                name: 'map',
                animation: 'jump'
            },
            title: 'Link 6',
            subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
        }
    ];
}
