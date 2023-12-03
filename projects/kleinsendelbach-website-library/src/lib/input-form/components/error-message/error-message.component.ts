import { Component, Input } from '@angular/core';
import { InputError } from '../../types';

@Component({
  selector: 'error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.sass']
})
export class ErrorMessageComponent {
    @Input() public error!: InputError | null;
}
