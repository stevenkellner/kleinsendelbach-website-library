import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Link } from '../../types';

@Component({
    selector: 'button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.sass']
})
export class ButtonComponent {

    @Input() public actionLink: Link | null = null;

    @Input() public borderless: boolean = false;

    @Input() public largeText: boolean = false;

    @Input() public prominent: boolean = false;

    @Input() public selected: boolean = false;

    @Output() public action = new EventEmitter<void>();
}
