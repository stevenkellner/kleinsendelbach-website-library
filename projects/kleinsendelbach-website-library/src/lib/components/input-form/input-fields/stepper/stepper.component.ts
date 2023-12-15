import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { ErrorMessageComponent } from '../../error-message/error-message.component';
import { LabelComponent } from '../../label/label.component';
import { InputField } from '../../../../types';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'stepper-input',
    standalone: true,
    imports: [CommonModule, ErrorMessageComponent, LabelComponent, FontAwesomeModule],
    templateUrl: './stepper.component.html',
    styleUrl: './stepper.component.sass'
})
export class StepperInputComponent implements AfterViewInit, OnDestroy {

    @Input({ required: true }) public label!: string;

    @Input({ required: true }) public inputField!: InputField<number>;

    @Input() public min: number | null = null;

    @Input() public max: number | null = null;

    @ViewChild('input') private readonly inputElement!: ElementRef<HTMLInputElement>;

    constructor(
        private readonly faIconLibrary: FaIconLibrary
    ) {
        this.faIconLibrary.addIconPacks(fas, far, fab);
    }

    public ngAfterViewInit() {
        this.inputField.initialValue = this.clampValue(this.inputField.value);
        this.inputElement.nativeElement.value = this.inputField.value.toString();
        this.inputField.listener.add('input-field', value => {
            this.inputElement.nativeElement.value = this.clampValue(value).toString();
        });
    }

    public ngOnDestroy() {
        this.inputField.listener.remove('input-field');
    }

    public onBlur() {
        const value = this.clampValue(Number.parseInt(this.inputElement.nativeElement.value));
        this.inputField.inputValue = Number.isNaN(value) ? this.inputField.value : value;
    }

    public onStepperChange(direction: 'increase' | 'decrease') {
        this.inputField.inputValue = this.clampValue(this.inputField.value + (direction === 'increase' ? 1 : -1));
    }

    private clampValue(value: number): number {
        if (this.min !== null && this.max !== null && this.min > this.max)
            return value;
        if (this.min !== null && value < this.min)
            return this.min;
        if (this.max !== null && value > this.max)
            return this.max;
        return value;
    }
}
