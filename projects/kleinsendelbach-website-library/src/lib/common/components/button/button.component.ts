import { Component, Input } from '@angular/core';
import { Link } from '../../types';

@Component({
    selector: 'button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.sass']
})
export class ButtonComponent {

    @Input() public action!: (() => void) | Link;

    @Input() public borderless: boolean = false;

    public get actionType(): { type: 'function', action: () => void } | { type: 'link', link: Link } {
        if (typeof this.action === 'function') {
            return {
                type: 'function',
                action: this.action
            };
        } else {
            return {
                type: 'link',
                link: this.action
            };
        }
    }
}
