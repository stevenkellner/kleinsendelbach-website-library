import { Component } from '@angular/core';
import { OpeningHoursData } from 'kleinsendelbach-website-library';

@Component({
    selector: 'app-opening-hours',
    templateUrl: './opening-hours.component.html',
    styleUrls: ['./opening-hours.component.sass']
})
export class OpeningHoursComponent {
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
    ]
}
