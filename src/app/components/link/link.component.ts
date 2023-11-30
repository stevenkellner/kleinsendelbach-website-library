import { Component } from '@angular/core';
import { InternalLinkService } from 'kleinsendelbach-website-library';

type InternalPath = 'path-1' | 'path-2' | 'path-3';

@Component({
    selector: 'app-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.sass']
})
export class LinkComponent {
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
