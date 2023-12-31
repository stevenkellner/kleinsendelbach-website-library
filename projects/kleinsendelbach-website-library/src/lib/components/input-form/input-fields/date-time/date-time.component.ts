import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { ErrorMessageComponent } from '../../error-message/error-message.component';
import { LabelComponent } from '../../label/label.component';
import { DeviceTypeService } from '../../../../services';
import { InputField, UtcDate } from '../../../../types';

@Component({
    selector: 'date-time-input',
    standalone: true,
    imports: [CommonModule, ErrorMessageComponent, LabelComponent],
    templateUrl: './date-time.component.html',
    styleUrl: './date-time.component.sass'
})
export class DateTimeInputComponent implements AfterViewInit, OnDestroy {

    @Input({ required: true }) public label!: string;

    @Input() public components: 'date' | 'time' | ['date', 'time'] = ['date', 'time'];

    @Input({ required: true }) public inputField!: InputField<UtcDate>;

    @ViewChild('dateInput') private readonly dateInputElement: ElementRef<HTMLInputElement> | null = null;

    @ViewChild('timeInput') private readonly timeInputElement: ElementRef<HTMLInputElement> | null = null;

    constructor(
        public deviceType: DeviceTypeService
    ) {}

    public ngAfterViewInit() {
        const dateTime = this.toDateTime(this.inputField.value);
        if (this.dateInputElement)
            this.dateInputElement.nativeElement.value = dateTime.date;
        if (this.timeInputElement)
            this.timeInputElement.nativeElement.value = dateTime.time;
        this.inputField.listener.add('input-field', value => {
            const dateTime2 = this.toDateTime(value);
            if (this.dateInputElement)
                this.dateInputElement.nativeElement.value = dateTime2.date;
            if (this.timeInputElement)
                this.timeInputElement.nativeElement.value = dateTime2.time;
        });
    }

    public ngOnDestroy() {
        this.inputField.listener.remove('input-field');
    }

    public isComponentShown(component: 'date' | 'time'): boolean {
        if (typeof this.components === 'string')
            return this.components === component;
        return this.components.includes(component);
    }

    public onBlur() {
        this.inputField.inputValue = this.toDate(
            this.dateInputElement ? this.dateInputElement.nativeElement.value : null,
            this.timeInputElement ? this.timeInputElement.nativeElement.value : null
        );
    }

    private toDateTime(date: UtcDate): { date: string; time: string } {
        const day = date.day <= 9 ? `0${date.day}` : `${date.day}`;
        const month = date.month <= 9 ? `0${date.month}` : `${date.month}`;
        const hour = date.hour <= 9 ? `0${date.hour}` : `${date.hour}`;
        const minute = date.minute <= 9 ? `0${date.minute}` : `${date.minute}`;
        return {
            date: `${date.year}-${month}-${day}`,
            time: `${hour}:${minute}`
        };
    }

    private toDate(date: string | null, time: string | null): UtcDate {
        let dateComponents = {
            day: this.inputField.value.day,
            month: this.inputField.value.month,
            year: this.inputField.value.year
        };
        if (date !== null) {
            const dateRegex = /^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})$/gu;
            const dateMatch = dateRegex.exec(date);
            if (dateMatch && dateMatch.groups) {
                dateComponents = {
                    day: Number.parseInt(dateMatch.groups['day']),
                    month: Number.parseInt(dateMatch.groups['month']),
                    year: Number.parseInt(dateMatch.groups['year'])
                };
            }
        }
        let timeComponents = {
            hour: this.inputField.value.hour,
            minute: this.inputField.value.minute
        };
        if (time !== null) {
            const timeRegex = /^(?<hour>\d{2}):(?<minute>\d{2})$/gu;
            const timeMatch = timeRegex.exec(time);
            if (timeMatch && timeMatch.groups) {
                timeComponents = {
                    hour: Number.parseInt(timeMatch.groups['hour']),
                    minute: Number.parseInt(timeMatch.groups['minute'])
                };
            }
        }
        return new UtcDate(
            dateComponents.year,
            dateComponents.month,
            dateComponents.day,
            timeComponents.hour,
            timeComponents.minute
        );
    }
}
