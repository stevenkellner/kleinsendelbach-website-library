import { NgModule } from '@angular/core';
import { TextSectionModule } from './text-section';
import { KlsbCommonModule } from './common';
import { CrypterModule } from './crypter';
import { FirebaseApiModule } from './firebase-api';
import { AuthenticationModule } from './authentication';
import { HeaderModule } from './header';
import { FooterModule } from './footer/footer.module';
import { InputFormModule } from './input-form';
import { EventModule } from './event';
import { ReportModule } from './report';

@NgModule({
    declarations: [],
    imports: [
        TextSectionModule,
        KlsbCommonModule,
        CrypterModule,
        FirebaseApiModule,
        AuthenticationModule,
        HeaderModule,
        FooterModule,
        InputFormModule,
        EventModule,
        ReportModule
    ],
    exports: [
        TextSectionModule,
        KlsbCommonModule,
        CrypterModule,
        FirebaseApiModule,
        AuthenticationModule,
        HeaderModule,
        FooterModule,
        FooterModule,
        InputFormModule,
        EventModule,
        ReportModule
    ]
})
export class KleinsendelbachWebsiteLibraryModule {}
