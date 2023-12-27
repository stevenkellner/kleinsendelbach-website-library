import { Injectable } from '@angular/core';
import { WindowService } from './window.service';
import { Color } from '../types';

@Injectable({
    providedIn: 'root'
})
export class ServerWindowService extends WindowService {

    public override getRandomValues(array: Uint8Array): Uint8Array {
        return array;
    }

    public override get innerWidth(): number {
        return 0;
    }

    public override open(url?: string | URL, target?: string, features?: string): WindowProxy | null {
        return null;
    }

    public override setTimeout(handler: TimerHandler, timeout?: number | undefined): number {
        return 0;
    }

    public override get location(): Location | null {
        return null;
    }

    public override createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementTagNameMap[K] | null {
        return null;
    }

    public override setBodyBackgroundColor(color: Color) {}

    public override appendHeadElement(node: Node) {}

    public override getElementById(elementId: string): HTMLElement | null {
        return null;
    }
}
