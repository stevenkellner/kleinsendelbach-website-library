import { Component, Input, OnDestroy } from '@angular/core';
import { CookieSelection, Link } from '../../types';
import { CookieSelectionService, DeviceTypeService } from '../../services';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
    selector: 'cookie-selector',
    standalone: true,
    imports: [CommonModule, ButtonComponent],
    templateUrl: './cookie-selector.component.html',
    styleUrl: './cookie-selector.component.sass'
})
export class CookieSelectorComponent<InternalPathKey extends string> implements OnDestroy {

    @Input({ required: true }) public privacyLink!: Link | InternalPathKey;

    public cookieSelection: CookieSelection;

    public isShown: boolean;

    public selectionShown: boolean;

    public detailsShown = false;

    constructor(
        public readonly cookieSelectionService: CookieSelectionService,
        public readonly deviceType: DeviceTypeService
    ) {
        this.cookieSelection = this.cookieSelectionService.cookieSelection;
        this.cookieSelectionService.listener.add('cookie-selector', selection => {
            this.cookieSelection = selection;
        });
        this.isShown = !this.cookieSelectionService.isSelectionSaved;
        this.selectionShown = this.deviceType.current !== 'mobile';
    }

    public ngOnDestroy() {
        this.cookieSelectionService.listener.remove('cookie-selector');
    }

    public toggleCookieSelection(type: keyof CookieSelection) {
        if (type === 'necessary')
            return;
        this.cookieSelection[type] = this.cookieSelection[type] === 'selected' ? 'unselected' : 'selected';
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
        this.cookieSelection = {
            functionality: 'selected',
            necessary: 'selected',
            statistics: 'selected'
        };
        this.handleConfirmSelected();
    }

    public handleConfirmSelected() {
        this.cookieSelectionService.saveCookieSelection(this.cookieSelection);
        this.isShown = false;
    }
}
