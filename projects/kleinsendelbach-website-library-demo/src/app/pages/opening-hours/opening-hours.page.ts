import { Component } from '@angular/core';
import { OpeningHoursComponent, OpeningHoursData } from 'kleinsendelbach-website-library';

@Component({
    selector: 'opening-hours-page',
    standalone: true,
    imports: [OpeningHoursComponent],
    templateUrl: './opening-hours.page.html',
    styleUrls: ['./opening-hours.page.sass']
})
export class OpeningHoursPage {

    public openingHoursData: OpeningHoursData = [
        {
            time: 'geschlossen',
            title: 'Montag'
        },
        {
            time: 'geschlossen',
            title: 'Dienstag'
        },
        {
            time: 'geschlossen',
            title: 'Mittwoch'
        },
        {
            time: 'geschlossen',
            title: 'Donnerstag'
        },
        {
            time: '19 - 22 Uhr',
            title: 'Freitag'
        },
        {
            time: '18 - 21 Uhr',
            title: 'Samstag'
        },
        {
            time: '9:30 - 12 Uhr und 17 - 20 Uhr, bei Heimspielen: 13:30 - 20 Uhr',
            title: 'Sonntag'
        }
    ];
}
