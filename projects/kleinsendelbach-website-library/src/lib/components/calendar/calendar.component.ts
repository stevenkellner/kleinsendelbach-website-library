import { CalendarDayViewComponent } from './calendar-day-view/calendar-day-view.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CalendarDateFormatter, CalendarEvent, CalendarEventTitleFormatter, CalendarModule, CalendarMonthViewDay, CalendarView, DAYS_OF_WEEK } from 'angular-calendar';
import { CalendarEventTitleWithDateFormatter, CalendarLocalizedDateFormatter } from './calendar-formatter';
import { isSameDay, isSameMonth } from 'date-fns';
import { Color, TrackBy } from '../../types';
import { AppearanceService, DeviceTypeService } from '../../services';
import * as de from '@angular/common/locales/de';

@Component({
    selector: 'calendar',
    standalone: true,
    imports: [CommonModule, CalendarModule, CalendarDayViewComponent],
    templateUrl: './calendar.component.html',
    styleUrl: './calendar.component.sass',
    providers: [
        {
            provide: CalendarEventTitleFormatter,
            useClass: CalendarEventTitleWithDateFormatter
        },
        {
            provide: CalendarDateFormatter,
            useClass: CalendarLocalizedDateFormatter
        }
    ],
})
export class CalendarComponent<ColumnId extends string, MetaType extends { columnId: ColumnId }> {

    @Input() public events!: CalendarEvent<MetaType>[]

    @Input() public columns!: {
        id: ColumnId;
        text: string;
        color: Color;
    }[];

    public TrackBy = TrackBy;

    public activeDate = new Date();

    public activeDateIsOpen = false;

    public currentView = CalendarView.Month;

    public readonly weekStartsOn = DAYS_OF_WEEK.MONDAY;

    constructor(
        public readonly deviceType: DeviceTypeService,
        public readonly appearance: AppearanceService
    ) {
        registerLocaleData(de.default);
    }

    public closeActiveDate() {
        this.activeDateIsOpen = false;
    }

    public setCurrentView(view: 'month' | 'week' | 'day') {
        switch (view) {
            case 'month':
                this.currentView = CalendarView.Month;
                break;
            case 'week':
                this.currentView = CalendarView.Week;
                break;
            case 'day':
                this.currentView = CalendarView.Day;
                break;
        }
    }

    public dateClicked(day: CalendarMonthViewDay) {
        if (!isSameMonth(day.date, this.activeDate))
            return;
        if (isSameDay(day.date, this.activeDate)) {
            if (this.activeDateIsOpen)
                this.viewDate(day.date);
            else
                this.activeDateIsOpen = true;
        }
        if (day.events.length === 0)
            this.viewDate(day.date);
        this.activeDate = day.date;
    }

    public eventClicked(event: CalendarEvent) {
        this.viewDate(event.start);
    }

    public viewDate(date: Date) {
        this.activeDate = date;
        this.currentView = CalendarView.Day;
    }
}
