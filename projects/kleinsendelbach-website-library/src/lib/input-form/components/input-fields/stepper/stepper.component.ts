import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { InputField } from '../../../types';

@Component({
  selector: 'input-field-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.sass']
})
export class StepperComponent implements AfterViewInit, OnDestroy {

    @Input() public label!: string;

    @Input() public inputField!: InputField<number>;

    @Input() public min: number | null = null;

    @Input() public max: number | null = null;

    @ViewChild('input') private readonly inputElement!: ElementRef<HTMLInputElement>;

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
