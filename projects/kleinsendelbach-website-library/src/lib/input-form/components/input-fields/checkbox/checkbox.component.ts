import { Component, Input } from '@angular/core';
import { InputField } from '../../../types';

@Component({
    selector: 'input-field-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.sass']
})
export class CheckboxComponent {

    @Input() public label!: string;

    @Input() public inputField!: InputField<boolean>;

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
