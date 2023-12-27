import { Component } from '@angular/core';
import { CookieSelectionService, CookieSelectorComponent, Link, LinkService } from 'kleinsendelbach-website-library';

@Component({
    selector: 'cookie-selector-page',
    standalone: true,
    imports: [CookieSelectorComponent],
    templateUrl: './cookie-selector.page.html',
    styleUrls: ['./cookie-selector.page.sass']
})
export class CookieSelectorPage {

    public link = Link.external('Link', 'https://google.com');

    constructor(
        public readonly cookieSelectionService: CookieSelectionService,
        public readonly linkService: LinkService<never>
    ) {
        this.cookieSelectionService.removeCookieSelection();
        this.linkService.setup({}, 'https://asdf.com');
    }
}
