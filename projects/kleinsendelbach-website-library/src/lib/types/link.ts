export class Link {
    constructor(
        public readonly title: string,
        public readonly link: string,
        private readonly openInNewTab: boolean
    ) {}

    public static internal(title: string, path: string): Link {
        return new Link(title, `/${path}`, false);
    }

    public static external(title: string, link: string, openInNewTab: boolean = true): Link {
        return new Link(title, link, openInNewTab);
    }

    public get target(): '_blank' | '_self' {
        return this.openInNewTab ? '_blank' : '_self';
    }

    public map(callbackfn: (link: string) => string): Link {
        return new Link(this.title, callbackfn(this.link), this.openInNewTab);
    }
}
