import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkDirective } from './directives/link.directive';
import { AppearanceComponent } from './components/appearance/appearance.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './components/button/button.component';
import { ResultDisplayComponent } from './components/result-display/result-display.component';
import { LinksComponent } from './components/links/links.component';
import { ContactsComponent } from './components/contacts/contacts.component';

@NgModule({
    declarations: [
        LinkDirective,
        AppearanceComponent,
        ButtonComponent,
        ResultDisplayComponent,
        LinksComponent,
        ContactsComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [
        LinkDirective,
        AppearanceComponent,
        ButtonComponent,
        ResultDisplayComponent,
        LinksComponent,
        ContactsComponent
    ]
})
export class KlsbCommonModule {}
