export class Link {
    constructor(
        public readonly title: string,
        public readonly link: string,
        private readonly openInNewTab: boolean
    ) {}

    public static internal<InternalPath extends string>(title: string, path: InternalPath): Link {
        return new Link(title, `/${path}`, false);
    }

    public static internalParam<InternalPath extends string>(title: string, path: InternalPath, param: string): Link {
        return new Link(title, `/${path}/${param}`, false);
    }

    public static external(title: string, link: string, openInNewTab: boolean = true): Link {
        return new Link(title, link, openInNewTab);
    }

    public get target(): '_blank' | '_self' {
        return this.openInNewTab ? '_blank' : '_self';
    }
}
