import { Injectable } from '@angular/core';
import { Link } from '../types';

@Injectable({
    providedIn: 'root'
})
export class InternalLinkService<InternalPathKey extends string> {

    private paths: Record<InternalPathKey, {
        title: string;
        path: string;
    }> | null = null;

    public setup(paths: Record<InternalPathKey, {
        title: string;
        path: string;
    }>) {
        if (this.paths)
            throw new Error('Internal link service is already set up.');
        this.paths = paths;
    }

    public link(key: InternalPathKey): Link {
        if (!this.paths)
            throw new Error('Internal link service not set up, but a link is requested.');
        return Link.internal(this.paths[key].title, this.paths[key].path);
    }
}
