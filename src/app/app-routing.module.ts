import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkComponent } from './components/link/link.component';
import { TextSectionComponent } from './components/text-section/text-section.component';
import { CookieSelectorComponent } from './components/cookie-selector/cookie-selector.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InputFormComponent } from './components/input-form/input-form.component';
import { EventComponent } from './components/event/event.component';
import { ReportComponent } from './components/report/report.component';
import { LinksComponent } from './components/links/links.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { MapsComponent } from './components/maps/maps.component';
import { SquadComponent } from './components/squad/squad.component';
import { SponsorsRowComponent } from './components/sponsors-row/sponsors-row.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';

const routes: Routes = [
    { path: 'link', component: LinkComponent },
    { path: 'text-section', component: TextSectionComponent },
    { path: 'cookie-selector', component: CookieSelectorComponent },
    { path: 'authentication', component: AuthenticationComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'input-form', component: InputFormComponent },
    { path: 'event', component: EventComponent },
    { path: 'report', component: ReportComponent },
    { path: 'links', component: LinksComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'squad', component: SquadComponent },
    { path: 'sponsors-row', component: SponsorsRowComponent },
    { path: 'sponsors', component: SponsorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
