import { InternalLinkService } from './internal-link.service';
import { Injectable } from '@angular/core';
import { Link } from '../types';

@Injectable({
    providedIn: 'root'
})
export class LinkService<InternalPath extends string> {

    constructor(
        private readonly internalLinkService: InternalLinkService<InternalPath>
    ) {}

    public link(link: Link | InternalPath): Link {
        if (typeof link !== 'string')
            return link;
        return this.internalLinkService.link(link)
    }
}
