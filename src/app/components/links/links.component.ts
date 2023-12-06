import { Component } from '@angular/core';
import { Link, LinksData } from 'kleinsendelbach-website-library';

@Component({
    selector: 'app-links',
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.sass']
})
export class LinksComponent {
    public linksData: LinksData = {
        'link-1': {
            link: Link.external('Link 1', 'https://google.com'),
            title: 'Link 1',
            subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
        },
        'link-2': {
            link: Link.external('Link 2', 'https://google.com'),
            title: 'Link 2',
            subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut'
        },
        'link-3': {
            link: Link.external('Link 3', 'https://google.com'),
            title: 'Link 3',
            subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
        },
        'link-4': {
            link: Link.external('Link 4', 'https://google.com'),
            title: 'Link 4',
            subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
        },
        'link-5': {
            link: Link.external('Link 5', 'https://google.com'),
            title: 'Link 5',
            subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut'
        },
        'link-6': {
            link: Link.external('Link 6', 'https://google.com'),
            title: 'Link 6',
            subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
        }
    };
}
