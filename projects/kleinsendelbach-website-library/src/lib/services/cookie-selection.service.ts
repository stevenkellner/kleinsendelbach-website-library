import { Injectable } from '@angular/core';
import { CookieSelection, EventListener } from '../types';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})
export class CookieSelectionService {

    public listener = new EventListener<CookieSelection>();

    private readonly defaultSelection: CookieSelection = {
        necessary: 'selected',
        functionality: 'unselected',
        statistics: 'unselected'
    };

    constructor(
        private readonly cookieService: CookieService
    ) {}

    public get cookieSelection(): CookieSelection {
        if (!this.cookieService.check('cookies-selection'))
            return this.defaultSelection;
        const selectionJson = this.cookieService.get('cookies-selection');
        const selection = JSON.parse(selectionJson) as CookieSelection;
        return selection;
    }

    public get isSelectionSaved(): boolean {
        return this.cookieService.check('cookies-selection');
    }

    public changeCookieSelection(type: keyof CookieSelection, value: 'selected' | 'unselected') {
        if (type === 'necessary')
            return;
        const selection = this.cookieSelection;
        selection[type] = value;
        this.saveCookieSelection(selection);
    }

    public saveCookieSelection(selection: CookieSelection) {
        this.cookieService.set('cookies-selection', JSON.stringify(selection));
        this.listener.emitValue(selection);
    }

    public removeCookieSelection() {
        this.cookieService.delete('cookies-selection');
        this.listener.emitValue(this.defaultSelection);
    }
}
