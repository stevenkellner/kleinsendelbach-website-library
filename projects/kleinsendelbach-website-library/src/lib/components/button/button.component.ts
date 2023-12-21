import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Link } from '../../types';
import { CommonModule } from '@angular/common';
import { LinkDirective } from '../../directives';

@Component({
    selector: 'button',
    standalone: true,
    imports: [CommonModule, LinkDirective],
    templateUrl: './button.component.html',
    styleUrl: './button.component.sass'
})
export class ButtonComponent<InternalPathKey extends string> {

    @Input() public borderless: boolean = false;

    @Input() public largeText: boolean = false;

    @Input() public prominent: boolean = false;

    @Input() public selected: boolean = false;

    @Input() public disabled: boolean = false;

    @Input() public actionLink: Link | InternalPathKey | null = null;

    @Output() public action = new EventEmitter<void>();

    public clicked() {
        if (!this.disabled)
            this.action.emit();
    }
}
