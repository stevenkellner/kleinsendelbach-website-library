import { InternalLinkService } from './internal-link.service';
import { Injectable } from '@angular/core';
import { Link } from '../types';

@Injectable({
    providedIn: 'root'
})
export class LinkService<InternalPathKey extends string> {

    constructor(
        private readonly internalLinkService: InternalLinkService<InternalPathKey>
    ) {}

    public link(link: Link | InternalPathKey): Link {
        if (typeof link !== 'string')
            return link;
        return this.internalLinkService.link(link)
    }
}
