import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { InputField } from '../../../../types';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from '../../error-message/error-message.component';
import { LabelComponent } from '../../label/label.component';

@Component({
  selector: 'input-field-text-area',
  standalone: true,
  imports: [CommonModule, ErrorMessageComponent, LabelComponent],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.sass'
})
export class TextAreaComponent implements AfterViewInit, OnDestroy {

    @Input() public label!: string;

    @Input() public placeholder: string | null = null;

    @Input() public inputField!: InputField<string>;

    @ViewChild('textarea') private readonly textareaElement!: ElementRef<HTMLTextAreaElement>;

    public ngAfterViewInit() {
        this.textareaElement.nativeElement.value = this.inputField.value;
        this.inputField.listener.add('input-field', value => {
            this.textareaElement.nativeElement.value = value;
        });
    }

    public ngOnDestroy() {
        this.inputField.listener.remove('input-field');
    }

    public onBlur() {
        this.inputField.inputValue = this.textareaElement.nativeElement.value;
    }
}
