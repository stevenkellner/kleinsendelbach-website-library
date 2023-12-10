import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ErrorMessageComponent } from '../../error-message/error-message.component';
import { LabelComponent } from '../../label/label.component';
import { DeviceTypeService } from '../../../../services';
import { SelectOptions, InputField, TrackBy } from '../../../../types';

@Component({
    selector: 'input-field-inline-select',
    standalone: true,
    imports: [CommonModule, ErrorMessageComponent, LabelComponent],
    templateUrl: './inline-select.component.html',
    styleUrl: './inline-select.component.sass'
})
export class InlineSelectComponent<T extends string> {

    @Input() public label: string | null = null;

    @Input() public selectOptions!: SelectOptions.Ungrouped<T>;

    @Input() public inputField!: InputField<T>;

    public TrackBy = TrackBy;

    constructor(
        public readonly deviceType: DeviceTypeService
    ) {}

    public select(option: SelectOptions.Option<T>) {
        this.inputField.inputValue = option.id;
    }
}
