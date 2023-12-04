import { NgModule } from '@angular/core';
import { TextSectionModule } from './text-section';
import { KlsbCommonModule } from './common';
import { CrypterModule } from './crypter';
import { CookieSelectorModule } from './cookie-selector';
import { FirebaseApiModule } from './firebase-api';
import { AuthenticationModule } from './authentication';
import { HeaderModule } from './header';
import { FooterModule } from './footer/footer.module';
import { InputFormModule } from './input-form';
import { EventModule } from './event';

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
        FooterModule,
        InputFormModule,
        EventModule
    ],
    exports: [
        TextSectionModule,
        KlsbCommonModule,
        CrypterModule,
        CookieSelectorModule,
        FirebaseApiModule,
        AuthenticationModule,
        HeaderModule,
        FooterModule,
        FooterModule,
        InputFormModule,
        EventModule
    ]
})
export class KleinsendelbachWebsiteLibraryModule {}
