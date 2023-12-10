import { Component } from '@angular/core';
import { InternalLinkService, LinkDirective } from 'kleinsendelbach-website-library';

type InternalPath = 'path-1' | 'path-2' | 'path-3';

@Component({
    selector: 'link-page',
    standalone: true,
    imports: [LinkDirective],
    templateUrl: './link.page.html',
    styleUrls: ['./link.page.sass']
})
export class LinkPage {
    constructor(
        public readonly internalLinkService: InternalLinkService<InternalPath>
    ) {
        this.internalLinkService.setup({
            'path-1': 'Path 1',
            'path-2': 'Path 2',
            'path-3': 'Path 3'
        });
    }
}
