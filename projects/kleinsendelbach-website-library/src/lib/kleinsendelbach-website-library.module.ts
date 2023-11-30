import { NgModule } from '@angular/core';
import { TextSectionModule } from './text-section/text-section.module';
import { KlsbCommonModule } from './common';
import { CrypterModule } from './crypter';
import { CookieSelectorModule } from './cookie-selector/cookie-selector.module';
import { FirebaseApiModule } from './firebase-api';

@NgModule({
    declarations: [],
    imports: [
        TextSectionModule,
        KlsbCommonModule,
        CrypterModule,
        CookieSelectorModule,
        FirebaseApiModule
    ],
    exports: [
        TextSectionModule,
        KlsbCommonModule,
        CrypterModule,
        CookieSelectorModule,
        FirebaseApiModule
    ]
})
export class KleinsendelbachWebsiteLibraryModule {}
