import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DeviceTypeService, Link } from '../../../common';
import { InputField, InputForm } from '../../types';

@Component({
    selector: 'input-form',
    templateUrl: './input-form.component.html',
    styleUrls: ['./input-form.component.sass']
})
export class InputFormComponent<ExtraStatus extends PropertyKey> {

    @Input() public inputForm!: InputForm<Record<string, InputField<any>>, ExtraStatus>;

    @Input() public submitButtonText: string | null = null;

    @Input() public cancelButtonText: string | null = null;

    @Output() public submitButtonClicked = new EventEmitter<void>();

    @Output() public cancelButtonClicked = new EventEmitter<void>();

    public constructor(
        public readonly deviceType: DeviceTypeService
    ) {}

    public cancelClicked() {
        this.cancelButtonClicked.emit();
    }

    public submitClicked() {
        this.submitButtonClicked.emit();
    }
}
