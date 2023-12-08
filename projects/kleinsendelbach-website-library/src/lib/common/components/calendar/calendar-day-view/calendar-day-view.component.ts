import { ChangeDetectorRef, Component, ElementRef, Inject, Input, LOCALE_ID } from '@angular/core';
import { CalendarWeekViewComponent, DateAdapter, getWeekViewPeriod } from 'angular-calendar';
import { TrackBy } from '../../../types';
import { CalendarEvent } from 'calendar-utils';
import { DayCalendarUtils, DayView } from './day-calendar-utils';

@Component({
    selector: 'calendar-day-view',
    templateUrl: './calendar-day-view.component.html',
    styleUrls: ['./calendar-day-view.component.sass']
})
export class CalendarDayViewComponent<ColumnId extends string, MetaType extends { columnId: ColumnId }> extends CalendarWeekViewComponent {

    @Input() public columns!: { id: ColumnId, text: string }[];

    public TrackBy = TrackBy;

    public override daysInWeek = 1;

    public constructor(
        protected override cdr: ChangeDetectorRef,
        protected override utils: DayCalendarUtils<ColumnId, MetaType>,
        @Inject(LOCALE_ID) locale: string,
        protected override dateAdapter: DateAdapter,
        protected override element: ElementRef<HTMLElement>
    ) {
        super(cdr, utils, locale, dateAdapter, element);
    }

    public override getDayColumnWidth(eventRowContainer: HTMLElement): number {
        return Math.floor(eventRowContainer.offsetWidth / this.columns.length);
    }

    protected override getWeekView(events: CalendarEvent<MetaType>[]): DayView<ColumnId> {
        return this.utils.getWeekView({
            absolutePositionedEvents: true,
            dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            },
            dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            },
            events: events,
            columnIds: this.columns.map(column => column.id),
            excluded: this.excludeDays,
            hourSegments: this.hourSegments,
            precision: this.precision,
            segmentHeight: this.hourSegmentHeight,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            weekendDays: this.weekendDays,
            ...getWeekViewPeriod(
                this.dateAdapter,
                this.viewDate,
                this.weekStartsOn,
                this.excludeDays,
                this.daysInWeek
            )
        });
    }
}
