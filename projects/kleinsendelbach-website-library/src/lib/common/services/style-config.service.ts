import { AppearanceColor, recordEntries } from '../types';
import { Appearance, AppearanceService } from './appearance.service';
import { Injectable, OnDestroy } from '@angular/core';

export type StyleColor = 'primary' | 'accent' | 'background' | 'secondaryBackground' | 'hoveredBackground' | 'shadow' | 'text' | 'secondaryText' | 'formStatusSuccess' | 'formStatusError' | 'formStatusInfo' | 'pageBackground';

@Injectable({
    providedIn: 'root'
})
export class StyleConfigService implements OnDestroy {

    private colorConfig: Record<StyleColor, AppearanceColor> | null = null;

    constructor(
        private readonly appearance: AppearanceService
    ) {
        this.appearance.listener.add('style-config', newAppearance => {
            this.setConfig(newAppearance);
        });
    }

    public ngOnDestroy(): void {
        this.appearance.listener.remove('style-config');
    }

    public setup(colorConfig: Record<StyleColor, AppearanceColor>) {
        if (this.colorConfig)
            throw new Error('Style config service is already set up.');
        this.colorConfig = colorConfig;
        this.setConfig(this.appearance.current);
    }

    public css<Key extends StyleColor>(key: Key): string {
        if (!this.colorConfig)
            throw new Error('Style config service not set up, but the color is requested.');
        return this.colorConfig[key].color(this.appearance.current).css;
    }

    private setConfig(appearance: Appearance) {
        if (!this.colorConfig)
            throw new Error('Style config service not set up, but the color config is requested.');
        document.body.style.backgroundColor = this.colorConfig.pageBackground.css(appearance);
        const styleElement = document.getElementById('dynamic-color-style');
        if (!styleElement)
            return;
        const cssConfigVariables = recordEntries(this.colorConfig).map(({key, value}) => `\t--${key}: ${value.color(appearance).css};`);
        styleElement.innerHTML = `:root {\n${cssConfigVariables.join('\n')}\n}`;
    }
}
