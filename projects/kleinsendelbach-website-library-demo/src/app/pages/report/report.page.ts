import { Component } from '@angular/core';
import { Guid, ReportGroup, UtcDate, ReportsComponent } from 'kleinsendelbach-website-library';

export type ReportGroupId = 'group-1' | 'group-2' | 'group-3';

@Component({
    selector: 'report-page',
    standalone: true,
    imports: [ReportsComponent],
    templateUrl: './report.page.html',
    styleUrls: ['./report.page.sass']
})
export class ReportPage {

    public reportGroups1: ReportGroup<ReportGroupId>[] = [];

    public reportGroups2: ReportGroup<ReportGroupId>[] = [
        {
            groupId: 'group-2',
            reports: [
                {
                    id: Guid.newGuid(),
                    createDate: UtcDate.now.advanced({ day: -1 }),
                    title: 'Report 1',
                    message: '**Lorem ipsum** dolor sit amet, *consetetur* sadipscing elitr, sed diam nonumy *eirmod **tempor*** invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n![An image](https://www.rmjtactical.com/cdn/shop/products/KESTRELBLACK_700x.jpg?v=1631732787, 33%)\nAt vero eos et accusam et justo duo dolores et ea rebum [a link](https://google.com). Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    imageUrl: null
                },
                {
                    id: Guid.newGuid(),
                    createDate: UtcDate.now.advanced({ day: -5 }),
                    title: 'Report 2',
                    message: 'Message 2 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    imageUrl: null
                },
                {
                    id: Guid.newGuid(),
                    createDate: UtcDate.now.advanced({ day: -1 }),
                    title: 'Report 3',
                    message: 'Message 3 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    imageUrl: 'https://www.rmjtactical.com/cdn/shop/products/KESTRELBLACK_700x.jpg?v=1631732787'
                },
                {
                    id: Guid.newGuid(),
                    createDate: UtcDate.now.advanced({ day: -5 }),
                    title: 'Report 4',
                    message: 'Message 4 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    imageUrl: null
                },
                {
                    id: Guid.newGuid(),
                    createDate: UtcDate.now.advanced({ day: -5 }),
                    title: 'Report 5',
                    message: 'Message 5 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    imageUrl: 'https://www.rmjtactical.com/cdn/shop/products/KESTRELBLACK_700x.jpg?v=1631732787'
                },
                {
                    id: Guid.newGuid(),
                    createDate: UtcDate.now.advanced({ day: -5 }),
                    title: 'Report 6',
                    message: 'Message 6 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    imageUrl: 'https://www.rmjtactical.com/cdn/shop/products/KESTRELBLACK_700x.jpg?v=1631732787'
                }
            ]
        },
        {
            groupId: 'group-3',
            reports: [
                {
                    id: Guid.newGuid(),
                    createDate: UtcDate.now.advanced({ day: -5 }),
                    title: 'Report 7',
                    message: 'Message 7 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    imageUrl: 'https://www.rmjtactical.com/cdn/shop/products/KESTRELBLACK_700x.jpg?v=1631732787'
                }
            ]
        }
    ];

    public reportGroupTitle: Record<ReportGroupId, string> = {
        'group-1': 'Group 1',
        'group-2': 'Group 2',
        'group-3': 'Group 3'
    };
}
