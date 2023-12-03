import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { InputField } from '../../../types';

@Component({
  selector: 'input-field-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.sass']
})
export class TextComponent implements AfterViewInit, OnDestroy {
    @Input() public secure = false;

    @Input() public label!: string;

    @Input() public placeholder: string | null = null;

    @Input() public inputField!: InputField<string>;

    @ViewChild('input') private readonly inputElement!: ElementRef<HTMLInputElement>;


    public ngAfterViewInit() {
        this.inputElement.nativeElement.value = this.inputField.value;
        this.inputField.listener.add('input-field', value => {
            this.inputElement.nativeElement.value = value;
        });
    }

    public ngOnDestroy() {
        this.inputField.listener.remove('input-field');
    }

    public onBlur() {
        this.inputField.inputValue = this.inputElement.nativeElement.value;
    }
}
