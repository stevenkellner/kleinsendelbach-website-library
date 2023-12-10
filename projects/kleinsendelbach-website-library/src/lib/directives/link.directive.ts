import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Link } from '../types';
import { LinkService } from '../services';

@Directive({
    selector: '[link]',
    standalone: true
})
export class LinkDirective<InternalPath extends string> implements OnInit {

    @Input() public link!: Link | InternalPath;

    constructor(
        private readonly element: ElementRef<HTMLElement>,
        private readonly linkService: LinkService<InternalPath>
    ) {}

    public ngOnInit() {
        const link = this.linkService.link(this.link);
        if ('href' in this.element.nativeElement && typeof this.element.nativeElement.href === 'string' && this.element.nativeElement.href === '')
            this.element.nativeElement.href = link.link;
        if ('title' in this.element.nativeElement && typeof this.element.nativeElement.title === 'string' && this.element.nativeElement.title === '')
            this.element.nativeElement.title = link.title;
        if ('target' in this.element.nativeElement && typeof this.element.nativeElement.target === 'string' && this.element.nativeElement.target === '')
            this.element.nativeElement.target = link.target;
    }
}
