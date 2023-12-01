import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkComponent } from './components/link/link.component';
import { TextSectionComponent } from './components/text-section/text-section.component';
import { CookieSelectorComponent } from './components/cookie-selector/cookie-selector.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';

const routes: Routes = [
    { path: 'link', component: LinkComponent },
    { path: 'text-section', component: TextSectionComponent },
    { path: 'cookie-selector', component: CookieSelectorComponent },
    { path: 'authentication', component: AuthenticationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
