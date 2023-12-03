import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkComponent } from './components/link/link.component';
import { TextSectionComponent } from './components/text-section/text-section.component';
import { CookieSelectorComponent } from './components/cookie-selector/cookie-selector.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InputFormComponent } from './components/input-form/input-form.component';

const routes: Routes = [
    { path: 'link', component: LinkComponent },
    { path: 'text-section', component: TextSectionComponent },
    { path: 'cookie-selector', component: CookieSelectorComponent },
    { path: 'authentication', component: AuthenticationComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'input-form', component: InputFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
