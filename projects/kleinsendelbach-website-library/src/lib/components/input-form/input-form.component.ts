import { ButtonComponent } from './../button/button.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputError, InputForm } from '../../types';
import { DeviceTypeService } from '../../services';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './error-message/error-message.component';

@Component({
    selector: 'input-form',
    standalone: true,
    imports: [CommonModule, ButtonComponent, ErrorMessageComponent],
    templateUrl: './input-form.component.html',
    styleUrl: './input-form.component.sass'
})
export class InputFormComponent<Status extends string> {

    @Input({ required: true }) public inputForm!: InputForm<Record<string, any>, Status>;

    @Input() public submitButtonText: string | null = null;

    @Input() public cancelButtonText: string | null = null;

    @Output() public submitButtonClicked = new EventEmitter<void>();

    @Output() public cancelButtonClicked = new EventEmitter<void>();

    constructor(
        public readonly deviceType: DeviceTypeService
    ) {}

    public cancelClicked() {
        this.cancelButtonClicked.emit();
    }

    public submitClicked() {
        this.submitButtonClicked.emit();
    }
}
