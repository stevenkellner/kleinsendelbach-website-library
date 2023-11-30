import { Component } from '@angular/core';
import { CookieSelectionService } from 'kleinsendelbach-website-library';

@Component({
  selector: 'app-cookie-selector',
  templateUrl: './cookie-selector.component.html',
  styleUrls: ['./cookie-selector.component.sass']
})
export class CookieSelectorComponent {
    constructor(
        public readonly cookieSelectionService: CookieSelectionService
    ) {
        this.cookieSelectionService.removeCookieSelection();
    }
}
