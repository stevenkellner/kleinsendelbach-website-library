import { Component } from '@angular/core';
import { CookieSelectionService, CookiesSelection, DeviceTypeService } from '../../services';

@Component({
    selector: 'cookie-selector',
    templateUrl: './cookie-selector.component.html',
    styleUrls: ['./cookie-selector.component.sass']
})
export class CookieSelectorComponent {

    public cookiesSelection: CookiesSelection;

    public isShown: boolean;

    public selectionShown: boolean;

    public detailsShown = false;

    constructor(
        public readonly cookieSelectionService: CookieSelectionService,
        public readonly deviceType: DeviceTypeService
    ) {
        this.cookiesSelection = this.cookieSelectionService.cookiesSelection;
        this.cookieSelectionService.listener.add('cookie-selector', selection => {
            this.cookiesSelection = selection;
        });
        this.isShown = !this.cookieSelectionService.isSelectionSaved;
        this.selectionShown = this.deviceType.current !== 'mobile';
    }

    public ngOnDestroy() {
        this.cookieSelectionService.listener.remove('cookie-selector');
    }

    public toggleCookieSelection(type: keyof CookiesSelection) {
        if (type === 'necessary')
            return;
        this.cookiesSelection[type] = this.cookiesSelection[type] === 'selected' ? 'unselected' : 'selected';
    }

    public toggleSelectionShown() {
        this.selectionShown = !this.selectionShown;
        if (!this.selectionShown)
            this.detailsShown = false;
    }

    public toggleDetailsShown() {
        this.detailsShown = !this.detailsShown;
    }

    public handleConfirmAll() {
        this.cookiesSelection = {
            functionality: 'selected',
            necessary: 'selected',
            statistics: 'selected'
        };
        this.handleConfirmSelected();
    }

    public handleConfirmSelected() {
        this.cookieSelectionService.saveCookieSelection(this.cookiesSelection);
        this.isShown = false;
    }

}
