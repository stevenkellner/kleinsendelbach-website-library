import { Component } from '@angular/core';
import { CookieSelectionService } from 'kleinsendelbach-website-library';
import { environment } from 'src/app/environment';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.sass']
})
export class MapsComponent {

    public apiKey = environment.googleMapsApiKey;

    public readonly mapOptions: google.maps.MapOptions & { center: google.maps.LatLngLiteral } = {
        center: {
            lat: 49.59228025815224,
            lng: 11.157803435569505
        }
    };

    constructor(
        public readonly cookieSelectionService: CookieSelectionService
    ) {
        /*this.cookieSelectionService.saveCookieSelection({
            necessary: 'selected',
            functionality: 'selected',
            statistics: 'selected'
        });*/
    }
}
