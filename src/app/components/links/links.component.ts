import { Component } from '@angular/core';
import { Link, LinksData } from 'kleinsendelbach-website-library';

@Component({
    selector: 'app-links',
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.sass']
})
export class LinksComponent {
    public linksData: LinksData = [
        {
            link: Link.external('Link 1', 'https://google.com'),
            title: 'Link 1',
            subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
        },
        {
            link: Link.external('Link 2', 'https://google.com'),
            title: 'Link 2',
            subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut'
        },
        {
            link: Link.external('Link 3', 'https://google.com'),
            title: 'Link 3',
            subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
        },
        {
            link: Link.external('Link 4', 'https://google.com'),
            title: 'Link 4',
            subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
        },
        {
            link: Link.external('Link 5', 'https://google.com'),
            title: 'Link 5',
            subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut'
        },
        {
            link: Link.external('Link 6', 'https://google.com'),
            title: 'Link 6',
            subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
        }
    ];
}
