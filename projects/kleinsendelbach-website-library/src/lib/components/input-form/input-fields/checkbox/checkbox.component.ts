import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ErrorMessageComponent } from '../../error-message/error-message.component';
import { InputField } from '../../../../types';

@Component({
    selector: 'checkbox-input',
    standalone: true,
    imports: [CommonModule, ErrorMessageComponent],
    templateUrl: './checkbox.component.html',
    styleUrl: './checkbox.component.sass'
})
export class CheckboxInputComponent {

    @Input({ required: true }) public label!: string;

    @Input({ required: true }) public inputField!: InputField<boolean>;

    public get checked(): boolean {
        return this.inputField.value;
    }

    public set checked(checked: boolean) {
        this.inputField.inputValue = checked;
    }

    public onClick() {
        this.checked = !this.inputField.value;
    }
}
