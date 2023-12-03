import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { InputField, SelectOptions } from '../../../types';
import { TrackBy } from 'projects/kleinsendelbach-website-library/src/lib/common';

@Component({
  selector: 'input-field-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass']
})
export class SelectComponent<T extends string> implements AfterViewInit, OnDestroy {

    @Input() public label: string | null = null;

    @Input() public selectOptions!: SelectOptions<T>;

    @Input() public inputField!: InputField<T>;

    @ViewChild('select') private readonly selectElement!: ElementRef<HTMLSelectElement>;

    public TrackBy = TrackBy;

    public ngAfterViewInit() {
        this.selectElement.nativeElement.value = this.inputField.value;
        this.inputField.listener.add('input-field', value => {
            this.selectElement.nativeElement.value = value;
        });
    }

    public ngOnDestroy() {
        this.inputField.listener.remove('input-field');
    }

    public onBlur() {
        this.inputField.inputValue = this.selectElement.nativeElement.value as T;
    }
}
