import { Component } from '@angular/core';
import { CookieSelectionService, CookieSelectorComponent } from 'kleinsendelbach-website-library';

@Component({
  selector: 'cookie-selector-page',
  standalone: true,
  imports: [CookieSelectorComponent],
  templateUrl: './cookie-selector.page.html',
  styleUrls: ['./cookie-selector.page.sass']
})
export class CookieSelectorPage {
    constructor(
        public readonly cookieSelectionService: CookieSelectionService
    ) {
        this.cookieSelectionService.removeCookieSelection();
    }
}
