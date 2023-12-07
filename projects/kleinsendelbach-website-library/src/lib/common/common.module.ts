import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { LinkDirective } from './directives/link.directive';
import { AppearanceComponent } from './components/appearance/appearance.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './components/button/button.component';
import { ResultDisplayComponent } from './components/result-display/result-display.component';
import { LinksComponent } from './components/links/links.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CookieSelectorComponent } from './components/cookie-selector/cookie-selector.component';
import { MapsComponent } from './components/maps/maps.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { SquadComponent } from './components/squad/squad.component';
import { SquadPersonComponent } from './components/squad/squad-person/squad-person.component';
import { SponsorsRowsComponent } from './components/sponsors-rows/sponsors-rows.component';
import { SponsorComponent } from './components/sponsor/sponsor.component';
import { SponsorsRowComponent } from './components/sponsors-rows/sponsors-row/sponsors-row.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { BannerComponent } from './components/banner/banner.component';
import { OpeningHoursComponent } from './components/opening-hours/opening-hours.component';
import { BoxSplittedComponent } from './components/box-splitted/box-splitted.component';
import { ListComponent } from './components/list/list.component';
import { OverviewListComponent } from './components/overview-list/overview-list.component';

@NgModule({
    declarations: [
        CookieSelectorComponent,
        LinkDirective,
        AppearanceComponent,
        ButtonComponent,
        ResultDisplayComponent,
        LinksComponent,
        ContactsComponent,
        MapsComponent,
        SquadComponent,
        SquadPersonComponent,
        SponsorsRowsComponent,
        SponsorComponent,
        SponsorsRowComponent,
        SponsorsComponent,
        SocialMediaComponent,
        BannerComponent,
        OpeningHoursComponent,
        BoxSplittedComponent,
        ListComponent,
        OverviewListComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        GoogleMapsModule,
        HttpClientModule,
        HttpClientJsonpModule
    ],
    exports: [
        LinkDirective,
        AppearanceComponent,
        ButtonComponent,
        ResultDisplayComponent,
        LinksComponent,
        ContactsComponent,
        CookieSelectorComponent,
        MapsComponent,
        SquadComponent,
        SponsorsRowsComponent,
        SponsorsComponent,
        SocialMediaComponent,
        BannerComponent,
        OpeningHoursComponent,
        BoxSplittedComponent,
        ListComponent,
        OverviewListComponent
    ]
})
export class KlsbCommonModule {}
