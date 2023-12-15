import { Component } from '@angular/core';
import { InternalLinkService, LinkDirective } from 'kleinsendelbach-website-library';

type InternalPathKey = 'path-1' | 'path-2' | 'path-3';

@Component({
    selector: 'link-page',
    standalone: true,
    imports: [LinkDirective],
    templateUrl: './link.page.html',
    styleUrls: ['./link.page.sass']
})
export class LinkPage {
    constructor(
        public readonly internalLinkService: InternalLinkService<InternalPathKey>
    ) {
        this.internalLinkService.setup({
            'path-1': {
                title: 'Path 1',
                path: 'pfad-1'
            },
            'path-2': {
                title: 'Path 2',
                path: 'pfad-2'
            },
            'path-3': {
                title: 'Path 3',
                path: 'pfad-3'
            }
        });
    }
}
