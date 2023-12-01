import { Directive, ElementRef, Input } from '@angular/core';
import { Link } from '../types';
import { InternalLinkService } from '../services';

@Directive({
  selector: '[link]'
})
export class LinkDirective<InternalPath extends string> {
    @Input() public link!: Link | InternalPath;

    constructor(
        private readonly element: ElementRef<HTMLElement>,
        private readonly internalLinkService: InternalLinkService<InternalPath>
    ) {}

    public ngOnInit() {
        const link = typeof this.link === 'string' ? this.internalLinkService.link(this.link) : this.link;
        if ('href' in this.element.nativeElement && typeof this.element.nativeElement.href === 'string' && this.element.nativeElement.href === '')
            this.element.nativeElement.href = link.link;
        if ('title' in this.element.nativeElement && typeof this.element.nativeElement.title === 'string' && this.element.nativeElement.title === '')
            this.element.nativeElement.title = link.title;
        if ('target' in this.element.nativeElement && typeof this.element.nativeElement.target === 'string' && this.element.nativeElement.target === '')
            this.element.nativeElement.target = link.target;
    }
}
