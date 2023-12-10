import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppearanceService } from '../../services';
import { Appearance } from '../../types';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'appearance-changer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './appearance-changer.component.html',
  styleUrl: './appearance-changer.component.sass'
})
export class AppearanceChangerComponent {

    constructor(
        public readonly appearanceService: AppearanceService,
        private readonly faIconLibrary: FaIconLibrary
    ) {
        this.faIconLibrary.addIconPacks(fas, far, fab);
    }

    public get current(): Appearance | 'system' {
        return this.appearanceService.currentConfig;
    }

    public get icon(): IconProp {
        if (this.appearanceService.currentConfig === 'light')
            return 'sun';
        if (this.appearanceService.currentConfig === 'dark')
            return 'moon';
        return 'circle-half-stroke';
    }

    public setAppearance(appearance: Appearance | 'system') {
        this.appearanceService.setAppearance(appearance);
    }

    public nextAppearance() {
        if (this.appearanceService.currentConfig === 'light')
            this.setAppearance('system');
        else if (this.appearanceService.currentConfig === 'dark')
            this.setAppearance('light');
        else
            this.setAppearance('dark');
    }
}
