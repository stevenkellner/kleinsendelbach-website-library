import { Component } from '@angular/core';
import { CookieSelectionService, MapsComponent } from 'kleinsendelbach-website-library';
import { environment } from '../../environment';

@Component({
    selector: 'maps-page',
    standalone: true,
    imports: [MapsComponent],
    templateUrl: './maps.page.html',
    styleUrls: ['./maps.page.sass']
})
export class MapsPage {

    public apiKey = environment.googleMaps.apiKey;

    public readonly mapOptions: google.maps.MapOptions & { center: google.maps.LatLngLiteral } = {
        center: {
            lat: 49.59228025815224,
            lng: 11.157803435569505
        }
    };

    constructor(
        public readonly cookieSelectionService: CookieSelectionService
    ) {
        // this.cookieSelectionService.saveCookieSelection({
        //     necessary: 'selected',
        //     functionality: 'selected',
        //     statistics: 'selected'
        // });
    }
}
