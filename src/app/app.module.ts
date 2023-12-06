import { GoogleMapsModule } from '@angular/google-maps';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KleinsendelbachWebsiteLibraryModule } from 'kleinsendelbach-website-library';
import { LinkComponent } from './components/link/link.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TextSectionComponent } from './components/text-section/text-section.component';
import { CookieSelectorComponent } from './components/cookie-selector/cookie-selector.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AngularFireFunctionsModule, REGION } from '@angular/fire/compat/functions';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './environment';
import { HeaderComponent } from './components/header/header.component';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from './components/footer/footer.component';
import { InputFormComponent } from './components/input-form/input-form.component';
import { EventComponent } from './components/event/event.component';
import { ReportComponent } from './components/report/report.component';
import { LinksComponent } from './components/links/links.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { MapsComponent } from './components/maps/maps.component';

@NgModule({
    declarations: [
        AppComponent,
        LinkComponent,
        TextSectionComponent,
        CookieSelectorComponent,
        AuthenticationComponent,
        HeaderComponent,
        FooterComponent,
        InputFormComponent,
        EventComponent,
        ReportComponent,
        LinksComponent,
        ContactsComponent,
        MapsComponent
    ],
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        BrowserModule,
        AppRoutingModule,
        KleinsendelbachWebsiteLibraryModule,
        FontAwesomeModule,
        AngularFireFunctionsModule,
        GoogleMapsModule
    ],
    providers: [
        { provide: REGION, useValue: 'europe-west1' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    public constructor(
        faIconLibrary: FaIconLibrary
    ) {
        faIconLibrary.addIconPacks(fas, far, fab);
    }
}
