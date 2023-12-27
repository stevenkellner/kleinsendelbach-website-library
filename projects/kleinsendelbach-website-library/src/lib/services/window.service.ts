import { Injectable } from '@angular/core';
import { Color } from '../types';

@Injectable({
    providedIn: 'root'
})
export class WindowService {

    public getRandomValues(array: Uint8Array): Uint8Array {
        return window.crypto.getRandomValues(array);
    }

    public get innerWidth(): number {
        return window.innerWidth;
    }

    public open(url?: string | URL, target?: string, features?: string): WindowProxy | null {
        return window.open(url, target, features);
    }

    public setTimeout(handler: TimerHandler, timeout?: number | undefined): number {
        return window.setTimeout(handler, timeout)
    }

    public get location(): Location | null {
        return window.location;
    }

    public createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementTagNameMap[K] | null {
        return window.document.createElement(tagName, options);
    }

    public setBodyBackgroundColor(color: Color) {
        window.document.body.style.backgroundColor = color.css;
    }

    public appendHeadElement(node: Node) {
        window.document.head.appendChild(node);
    }

    public getElementById(elementId: string): HTMLElement | null {
        return window.document.getElementById(elementId);
    }
}
