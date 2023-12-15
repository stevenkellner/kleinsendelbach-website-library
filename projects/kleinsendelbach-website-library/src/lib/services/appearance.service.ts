import { MediaMatcher } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Appearance, EventListener } from '../types';

@Injectable({
    providedIn: 'root'
})
export class AppearanceService {

    public listener = new EventListener<Appearance>();

    private appearance: Appearance | 'system' = 'system';

    constructor(
        private readonly cookieservice: CookieService,
        private readonly media: MediaMatcher
    ) {
        const savedAppearance = this.cookieservice.check('appearance') ? this.cookieservice.get('appearance') as Appearance | 'system' : 'system';
        this.setAppearance(savedAppearance);
        this.media.matchMedia('(prefers-color-scheme: dark)').addListener(event => {
            this.listener.emitValue(event.matches ? 'dark' : 'light');
        });
    }

    public get current(): Appearance {
        if (this.appearance !== 'system')
            return this.appearance;
        const prefersDark = this.media.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    }

    public get isLight(): boolean {
        return this.current === 'light';
    }

    public get isDark(): boolean {
        return this.current === 'dark';
    }

    public get currentConfig(): Appearance | 'system' {
        return this.appearance;
    }

    public get configDescription(): string {
        switch (this.appearance) {
            case 'light':
                return 'Hell';
            case 'dark':
                return 'Dunkel';
            case 'system':
                return 'System';
        }
    }

    public setAppearance(appearance: Appearance | 'system') {
        this.appearance = appearance;
        this.cookieservice.set('appearance', appearance);
        this.listener.emitValue(this.current);
    }
}
