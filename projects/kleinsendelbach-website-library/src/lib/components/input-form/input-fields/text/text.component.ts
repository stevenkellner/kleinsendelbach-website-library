import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { InputField } from '../../../../types';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from '../../error-message/error-message.component';
import { LabelComponent } from '../../label/label.component';

@Component({
    selector: 'text-input',
    standalone: true,
    imports: [CommonModule, ErrorMessageComponent, LabelComponent],
    templateUrl: './text.component.html',
    styleUrl: './text.component.sass'
})
export class TextInputComponent implements AfterViewInit, OnDestroy {

    @Input() public secure = false;

    @Input({ required: true }) public label!: string;

    @Input() public placeholder: string | null = null;

    @Input({ required: true }) public inputField!: InputField<string>;

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
