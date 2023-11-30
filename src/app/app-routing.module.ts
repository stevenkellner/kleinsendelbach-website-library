import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkComponent } from './components/link/link.component';
import { TextSectionComponent } from './components/text-section/text-section.component';

const routes: Routes = [
    { path: 'link', component: LinkComponent },
    { path: 'text-section', component: TextSectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
