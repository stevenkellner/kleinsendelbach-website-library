import { Injectable } from '@angular/core';
import { Link } from '../types';

@Injectable({
    providedIn: 'root'
})
export class InternalLinkService<Path extends string> {

    private pathTitles: Record<Path, string> | null = null;

    public setup(pathTitles: Record<Path, string>) {
        if (this.pathTitles)
            throw new Error('Internal link service is already set up.');
        this.pathTitles = pathTitles;
    }

    public link(path: Path): Link {
        if (!this.pathTitles)
            throw new Error('Internal link service not set up, but a link is requested.');
        return Link.internal(this.pathTitles[path], path);
    }
}
