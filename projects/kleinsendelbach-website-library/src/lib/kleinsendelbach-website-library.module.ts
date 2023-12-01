import { NgModule } from '@angular/core';
import { TextSectionModule } from './text-section';
import { KlsbCommonModule } from './common';
import { CrypterModule } from './crypter';
import { CookieSelectorModule } from './cookie-selector';
import { FirebaseApiModule } from './firebase-api';
import { AuthenticationModule } from './authentication';
import { HeaderModule } from './header';

@NgModule({
    declarations: [],
    imports: [
        TextSectionModule,
        KlsbCommonModule,
        CrypterModule,
        CookieSelectorModule,
        FirebaseApiModule,
        AuthenticationModule,
        HeaderModule
    ],
    exports: [
        TextSectionModule,
        KlsbCommonModule,
        CrypterModule,
        CookieSelectorModule,
        FirebaseApiModule,
        AuthenticationModule,
        HeaderModule
    ]
})
export class KleinsendelbachWebsiteLibraryModule {}
