import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KleinsendelbachWebsiteLibraryModule } from 'kleinsendelbach-website-library';
import { LinkComponent } from './components/link/link.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TextSectionComponent } from './components/text-section/text-section.component';
import { CookieSelectorComponent } from './components/cookie-selector/cookie-selector.component';

@NgModule({
    declarations: [
        AppComponent,
        LinkComponent,
        TextSectionComponent,
        CookieSelectorComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        KleinsendelbachWebsiteLibraryModule,
        FontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
