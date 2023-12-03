import { Component, Input } from '@angular/core';
import { InputField, SelectOptions } from '../../../types';
import { DeviceTypeService, TrackBy } from 'projects/kleinsendelbach-website-library/src/lib/common';

@Component({
  selector: 'input-field-inline-select',
  templateUrl: './inline-select.component.html',
  styleUrls: ['./inline-select.component.sass']
})
export class InlineSelectComponent<T extends string> {

    @Input() public label: string | null = null;

    @Input() public selectOptions!: SelectOptions.Ungrouped<T>;

    @Input() public inputField!: InputField<T>;

    public TrackBy = TrackBy;

    public constructor(
        public readonly deviceType: DeviceTypeService
    ) {}

    public select(option: SelectOptions.Option<T>) {
        this.inputField.inputValue = option.id;
    }
}
