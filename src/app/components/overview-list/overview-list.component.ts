import { Component } from '@angular/core';
import { Link, OverviewListData } from 'kleinsendelbach-website-library';

@Component({
  selector: 'app-overview-list',
  templateUrl: './overview-list.component.html',
  styleUrls: ['./overview-list.component.sass']
})
export class OverviewListComponent {
    public overviewListData: OverviewListData = [
        {
            title: 'Element 1',
            subtitle: 'Subtitle 1',
            buttons: [
                {
                    title: 'Button 1',
                    action: null,
                    link: null,
                    selected: false
                },
                {
                    title: 'Button 2',
                    action: () => {},
                    link: null,
                    selected: false
                },
                {
                    title: 'Button 3',
                    action: () => {},
                    link: Link.external('Link 3', 'https://google.com'),
                    selected: false
                },
                {
                    title: 'Button 4',
                    action: null,
                    link: Link.external('Link 3', 'https://google.com'),
                    selected: false
                },
                {
                    title: 'Button 5',
                    action: null,
                    link: null,
                    selected: false
                },
                {
                    title: 'Button 6',
                    action: null,
                    link: null,
                    selected: false
                },
                {
                    title: 'Button 7',
                    action: null,
                    link: null,
                    selected: false
                }
            ]
        },
        {
            title: 'Element 2',
            subtitle: null,
            buttons: null
        },
        {
            title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            buttons: [
                {
                    title: 'Button 1',
                    action: null,
                    link: null,
                    selected: false
                },
                {
                    title: 'Button 2',
                    action: null,
                    link: null,
                    selected: true
                }
            ]
        },
        {
            title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            buttons: null
        },
        {
            title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            subtitle: null,
            buttons: [
                {
                    title: 'Button 1',
                    action: null,
                    link: null,
                    selected: true
                },
                {
                    title: 'Button 2',
                    action: null,
                    link: null,
                    selected: false
                }
            ]
        }
    ];
}
