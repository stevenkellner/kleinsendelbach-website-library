import { Inject, Injectable, OnDestroy } from '@angular/core';
import { Appearance, AppearanceColor, StyleColor, entries } from '../types';
import { AppearanceService } from './appearance.service';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class StyleConfigService implements OnDestroy {

    private colorConfig: Record<StyleColor, AppearanceColor> | null = null;

    constructor(
        @Inject(DOCUMENT) private readonly document: Document,
        private readonly appearance: AppearanceService
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
        this.document.body.style.backgroundColor = this.colorConfig.pageBackground.css(appearance);
        let styleElement = this.document.getElementById('dynamic-color-style');
        if (!styleElement) {
            styleElement = this.document.createElement('style');
            styleElement.id = 'dynamic-color-style';
            this.document.head.appendChild(styleElement);
        }
        const cssConfigVariables = entries(this.colorConfig).map(({key, value}) => `\t--${key}: ${value.color(appearance).css};`);
         styleElement.innerHTML = `:root {\n${cssConfigVariables.join('\n')}\n}`;
    }
}
