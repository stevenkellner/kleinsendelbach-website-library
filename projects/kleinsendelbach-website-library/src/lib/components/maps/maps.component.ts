import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { TrackBy } from '../../types';
import { AppearanceService, CookieSelectionService } from '../../services';
import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { catchError, firstValueFrom, map, of } from 'rxjs';
import { GoogleMapsModule } from '@angular/google-maps';
import { googleMapsDarkStyle } from './google-maps-dark-style';
import { ButtonComponent } from '../button/button.component';

@Component({
    selector: 'maps',
    standalone: true,
    imports: [CommonModule, HttpClientModule, HttpClientJsonpModule, GoogleMapsModule, ButtonComponent],
    templateUrl: './maps.component.html',
    styleUrl: './maps.component.sass',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapsComponent implements OnInit, OnDestroy {

    @Input() public options: Partial<google.maps.MapOptions> = {};

    @Input() public markers: google.maps.LatLngLiteral[] = [];

    @Input({ required: true }) public apiKey!: string;

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
        private readonly httpClient: HttpClient,
        private readonly changeDetector: ChangeDetectorRef
    ) {}

    public ngOnInit() {
        void this.loadApi();
        this.functionalityCookiesSelected = this.cookieSelectionService.cookieSelection !== null && this.cookieSelectionService.cookieSelection.functionality === 'selected';
        this.changeDetector.markForCheck();
        this.cookieSelectionService.listener.add('google-maps', selection => {
            this.functionalityCookiesSelected = selection.functionality === 'selected';
            this.changeDetector.markForCheck();

        });
    }

    public ngOnDestroy() {
        this.cookieSelectionService.listener.remove('google-maps');
        this.changeDetector.markForCheck();
    }

    public get mapOptions(): google.maps.MapOptions {
        return {
            ...this.defaultMapOptions,
            ...this.options,
            styles: this.appearanceService.current === 'light' ? [] : googleMapsDarkStyle
        };
    }

    public async loadApi() {
        this.apiLoaded = await firstValueFrom(this.httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?key=${this.apiKey}`, 'callback')
            .pipe(map(() => true), catchError(() => of(false))));
        this.changeDetector.markForCheck();
    }

    public acceptFunctionalityCookies() {
        this.cookieSelectionService.changeCookieSelection('functionality', 'selected');
        this.changeDetector.markForCheck();
    }
}
