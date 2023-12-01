import { NgModule } from '@angular/core';
import { TextSectionModule } from './text-section';
import { KlsbCommonModule } from './common';
import { CrypterModule } from './crypter';
import { CookieSelectorModule } from './cookie-selector';
import { FirebaseApiModule } from './firebase-api';
import { AuthenticationModule } from './authentication';
import { HeaderModule } from './header';
import { FooterModule } from './footer/footer.module';

@NgModule({
    declarations: [],
    imports: [
        TextSectionModule,
        KlsbCommonModule,
        CrypterModule,
        CookieSelectorModule,
        FirebaseApiModule,
        AuthenticationModule,
        HeaderModule,
        FooterModule
    ],
    exports: [
        TextSectionModule,
        KlsbCommonModule,
        CrypterModule,
        CookieSelectorModule,
        FirebaseApiModule,
        AuthenticationModule,
        HeaderModule,
        FooterModule
    ]
})
export class KleinsendelbachWebsiteLibraryModule {}
