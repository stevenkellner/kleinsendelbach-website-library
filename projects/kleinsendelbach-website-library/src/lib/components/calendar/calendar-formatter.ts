import { formatDate } from "@angular/common";
import { Inject, Injectable, LOCALE_ID } from "@angular/core";
import { CalendarDateFormatter, CalendarEvent, CalendarEventTitleFormatter, DateFormatterParams } from "angular-calendar";

@Injectable({
    providedIn: 'root'
})
export class CalendarLocalizedDateFormatter extends CalendarDateFormatter {
    public override dayViewHour({ date, locale }: DateFormatterParams): string {
        return `${formatDate(date, 'H:mm', locale ?? 'de')} Uhr`;
    }

    public override weekViewHour(params: DateFormatterParams): string {
        return this.dayViewHour(params);
    }
}

@Injectable({
    providedIn: 'root'
})
export class CalendarEventTitleWithDateFormatter extends CalendarEventTitleFormatter {
    public get locale(): string {
        return this._locale;
    }
    public constructor(
        @Inject(LOCALE_ID) private readonly _locale: string
    ) {
        super();
    }

    public override month(event: CalendarEvent, title: string): string {
        return `<b>${formatDate(event.start, 'H:mm', this.locale)} Uhr</b> ${title}`;
    }
}
