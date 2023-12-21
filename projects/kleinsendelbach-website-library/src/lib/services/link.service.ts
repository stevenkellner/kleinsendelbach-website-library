import { Injectable } from '@angular/core';
import { Link, Result, entries } from '../types';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LinkService<InternalPathKey extends string> {

    private paths: Record<InternalPathKey, {
        title: string;
        path: string;
    }> | null = null;

    private baseUrl: string | null = null;

    constructor(
        private readonly router: Router
    ) {}

    public setup(paths: Record<InternalPathKey, {
        title: string;
        path: string;
    }>, baseUrl: string) {
        if (this.paths && this.baseUrl)
            throw new Error('Internal link service is already set up.');
        this.paths = paths;
        this.baseUrl = baseUrl;
        if (this.baseUrl.endsWith('/'))
            this.baseUrl.slice(0, this.baseUrl.length - 1);
    }

    public link(linkKey: Link | InternalPathKey): Link {
        if (!this.paths)
            throw new Error('Internal link service not set up, but a link is requested.');
        if (typeof linkKey !== 'string')
            return linkKey;
        return Link.internal(this.paths[linkKey].title, this.paths[linkKey].path);
    }

    public paramLink(linkKey: Link | InternalPathKey, context: Record<string, string>): Link {
        return this.link(linkKey).map(link => {
            for (const { key, value } of entries(context))
                link = link.replaceAll(`:${key}`, value);
            return link;
        });
    }

    public async navigate(linkKey: Link | InternalPathKey): Promise<Result<void>> {
        const success = await this.router.navigateByUrl(this.link(linkKey).link);
        return success ? Result.success() : Result.failure(undefined);
    }

    private absoluteUrl(relativeUrl: string): string {
        if (this.baseUrl === null)
            throw new Error('Internal link service not set up, but a absolute url is requested.');
        if (relativeUrl.startsWith('/'))
            return `${this.baseUrl}${relativeUrl}`;
        return `${this.baseUrl}/${relativeUrl}`;
    }

    public absoluteLink(relativeLink: Link): Link;
    public absoluteLink(relativeLink: string): string;
    public absoluteLink(relativeLink: Link | string): Link | string {
        if (typeof relativeLink === 'string')
            return this.absoluteUrl(relativeLink);
        return relativeLink.map(relativeUrl => this.absoluteUrl(relativeUrl));
    }
}
