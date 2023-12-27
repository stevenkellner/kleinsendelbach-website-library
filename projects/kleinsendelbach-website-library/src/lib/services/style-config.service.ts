import { Injectable, OnDestroy } from '@angular/core';
import { Appearance, AppearanceColor, StyleColor, StyleType, entries } from '../types';
import { AppearanceService } from './appearance.service';
import { WindowService } from './window.service';

@Injectable({
    providedIn: 'root'
})
export class StyleConfigService implements OnDestroy {

    private colorConfig: Record<StyleColor, AppearanceColor> | null = null;

    constructor(
        private readonly appearance: AppearanceService,
        private readonly windowService: WindowService
    ) {
        this.appearance.listener.add('style-config', appearance => {
            this.setConfig(appearance);
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
        this.windowService.setBodyBackgroundColor(this.colorConfig.pageBackground.color(appearance));
        let styleElement = this.windowService.getElementById('dynamic-color-style');
        if (!styleElement) {
            styleElement = this.windowService.createElement('style');
            if (!styleElement)
                return;
            styleElement.id = 'dynamic-color-style';
            this.windowService.appendHeadElement(styleElement);
        }
        const cssConfigVariables = entries(this.colorConfig).map(({key, value}) => `\t--${key}: ${value.color(appearance).css};`);
        styleElement.innerHTML = `:root {\n${cssConfigVariables.join('\n')}\n}`;
    }
}
