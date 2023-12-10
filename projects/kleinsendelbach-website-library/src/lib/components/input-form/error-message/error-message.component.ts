import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InputError } from '../../../types';

@Component({
    selector: 'error-message',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './error-message.component.html',
    styleUrl: './error-message.component.sass'
})
export class ErrorMessageComponent {

    @Input() public error!: InputError | null;
}
