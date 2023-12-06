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

@NgModule({
    declarations: [
        CookieSelectorComponent,
        LinkDirective,
        AppearanceComponent,
        ButtonComponent,
        ResultDisplayComponent,
        LinksComponent,
        ContactsComponent,
        MapsComponent
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
        MapsComponent
    ]
})
export class KlsbCommonModule {}
