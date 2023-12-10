import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { ErrorMessageComponent } from '../../error-message/error-message.component';
import { LabelComponent } from '../../label/label.component';
import { SelectOptions, InputField, TrackBy } from '../../../../types';

@Component({
  selector: 'input-field-select',
  standalone: true,
  imports: [CommonModule, ErrorMessageComponent, LabelComponent],
  templateUrl: './select.component.html',
  styleUrl: './select.component.sass'
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
