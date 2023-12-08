import { EventListener } from '../types/event-listener';
import { Injectable } from '@angular/core';

export type Appearance = 'dark' | 'light';

@Injectable({
    providedIn: 'root'
})
export class AppearanceService {

    public listener = new EventListener<Appearance>();

    private appearance: Appearance | 'system' = 'system';

    constructor() {
        const savedAppearance = localStorage.getItem('appearance') as Appearance | null;
        this.setAppearance(savedAppearance ?? 'system');
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            this.listener.emitValue(event.matches ? 'dark' : 'light');
        });
    }

    public get current(): Appearance {
        if (this.appearance !== 'system')
            return this.appearance;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
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
        if (this.appearance === 'light')
            return 'Hell';
        if (this.appearance === 'dark')
            return 'Dunkel';
        return 'System';
    }

    public setAppearance(appearance: Appearance | 'system') {
        this.appearance = appearance;
        localStorage.setItem('appearance', appearance);
        this.listener.emitValue(this.current);
    }
}
