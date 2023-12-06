import { TrackBy } from 'projects/kleinsendelbach-website-library/src/lib/common';
import { AppearanceService } from './../../services/appearance.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { googleMapsDarkStyle } from './google-maps-dark-style';
import { CookieSelectionService } from '../../services/cookie-selection.service';
import { catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.sass']
})
export class MapsComponent implements OnInit, OnDestroy {

    @Input() public options: Partial<google.maps.MapOptions> = {};

    @Input() public markers: google.maps.LatLngLiteral[] = [];

    @Input() public apiKey!: string;

    public TrackBy = TrackBy;

    private defaultMapOptions: google.maps.MapOptions = {
        clickableIcons: false,
        mapTypeId: 'hybrid',
        maxZoom: 20,
        minZoom: 5,
        scrollwheel: false,
        zoom: 14
    };

    public apiLoaded = false;

    public functionalityCookiesSelected: boolean = false;

    constructor(
        public readonly appearanceService: AppearanceService,
        public readonly cookieSelectionService: CookieSelectionService,
        private readonly httpClient: HttpClient
    ) {}

    public ngOnInit() {
        this.httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?key=${this.apiKey}`, 'callback')
            .pipe(map(() => true), catchError(() => of(false)))
            .subscribe(isLoaded => {
                this.apiLoaded = isLoaded;
            });
        this.functionalityCookiesSelected = this.cookieSelectionService.cookiesSelection !== null && this.cookieSelectionService.cookiesSelection.functionality === 'selected';
        this.cookieSelectionService.listener.add('google-maps', selection => {
            this.functionalityCookiesSelected = selection.functionality === 'selected';
        });
    }

    public ngOnDestroy() {
        this.cookieSelectionService.listener.remove('google-maps');
    }

    public get mapOptions(): google.maps.MapOptions {
        return {
            ...this.defaultMapOptions,
            ...this.options,
            styles: this.appearanceService.current === 'light' ? [] : googleMapsDarkStyle
        };
    }

    public acceptFunctionalityCookies() {
        this.cookieSelectionService.changeCookieSelection('functionality', 'selected');
    }
}
