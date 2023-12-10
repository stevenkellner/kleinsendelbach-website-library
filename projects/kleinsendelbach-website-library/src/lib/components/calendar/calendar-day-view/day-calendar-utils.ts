import { Injectable } from "@angular/core";
import { CalendarEvent, CalendarUtils } from "angular-calendar";
import { GetWeekViewArgs, WeekView } from "calendar-utils";

export type GetDayViewArgs<ColumnId extends string, MetaType extends { columnId: ColumnId }> = GetWeekViewArgs & {
    events: CalendarEvent<MetaType>[];
    columnIds: ColumnId[];
};

export type DayView<ColumnId extends string> = WeekView & {
    columnIds: ColumnId[];
};

@Injectable({
    providedIn: 'root'
})
export class DayCalendarUtils<ColumnId extends string, MetaType extends { columnId: ColumnId }> extends CalendarUtils {
    public override getWeekView(args: GetDayViewArgs<ColumnId, MetaType>): DayView<ColumnId> {
        const { period } = super.getWeekView(args);
        const view: DayView<ColumnId> = {
            allDayEventRows: [],
            hourColumns: [],
            columnIds: args.columnIds,
            period: period
        };
        view.columnIds.forEach((columnId, columnIndex) => {
            const events = args.events.filter((event: CalendarEvent<MetaType>) => event.meta ? event.meta.columnId === columnId : false);
            const columnView = super.getWeekView({
                ...args,
                events: events
            });
            view.hourColumns.push(columnView.hourColumns[0]);
            columnView.allDayEventRows.forEach(({ row }, rowIndex) => {
                view.allDayEventRows[rowIndex] ||= { row: [] };
                view.allDayEventRows[rowIndex].row.push({
                    ...row[0],
                    offset: columnIndex,
                    span: 1
                });
            });
        });
        return view;
    }
}
