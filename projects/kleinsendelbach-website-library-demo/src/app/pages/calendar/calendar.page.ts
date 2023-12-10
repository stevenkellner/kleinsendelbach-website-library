import { CalendarEvent } from 'angular-calendar';
import { Component } from '@angular/core';
import { CalendarComponent, Color, UtcDate } from 'kleinsendelbach-website-library';

type ColumnId = 'column-1' | 'column-2' | 'column-3';

@Component({
    selector: 'calendar-page',
    standalone: true,
    imports: [CalendarComponent],
    templateUrl: './calendar.page.html',
    styleUrls: ['./calendar.page.sass']
})
export class CalendarPage {

    public events: CalendarEvent<{ columnId: ColumnId, text: string }>[] = [
        this.generateEvent(0, 'column-1'),
        this.generateEvent(2, 'column-2'),
        this.generateEvent(5, 'column-2'),
        this.generateEvent(4, 'column-1'),
        this.generateEvent(7, 'column-1'),
        this.generateEvent(6, 'column-3'),
        this.generateEvent(1, 'column-2'),
        this.generateEvent(4, 'column-1'),
        this.generateEvent(5, 'column-2')
    ];

    public columns: {
        id: ColumnId;
        text: string;
        color: Color;
    }[] = [
        {
            id: 'column-1',
            text: 'Column 1',
            color: Color.hex('#EF4040')
        },
        {
            id: 'column-2',
            text: 'Column 2',
            color: Color.hex('#6DB9EF')
        },
        {
            id: 'column-3',
            text: 'Column 3',
            color: Color.hex('#BB9CC0')
        }
    ]

    public generateEvent(count: number, columnId: ColumnId): CalendarEvent<{ columnId: ColumnId, text: string }> {
        return {
            id: `event-${count}`,
            title: `Event ${count}`,
            start: UtcDate.now.advanced({ hour: count + 1 }).localized,
            end: UtcDate.now.advanced({ hour: count + 3 }).localized,
            color: {
                primary: '#ad2121',
                secondary: '#FAE3E3',
                secondaryText: '#24252A'
            },
            meta: {
                columnId: columnId,
                text: `event-meta-${count}`
            },
            actions: [
                {
                    label: 'Button 1',
                    onClick: ({ event }: { event: CalendarEvent<{ columnId: ColumnId, text: string }> }) => {
                        console.log('Button 1:', event.meta?.columnId, event.meta?.text);
                    }
                },
                {
                    label: 'Button 2',
                    onClick: ({ event }: { event: CalendarEvent<{ columnId: ColumnId, text: string }> }) => {
                        console.log('Button 2:', event.meta?.columnId, event.meta?.text);
                    }
                }
            ]
        }
    }
}
