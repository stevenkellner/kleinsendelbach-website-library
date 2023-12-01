import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrypterModule } from '../crypter';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { KlsbCommonModule } from '../common';
import { TextSectionModule } from '../text-section';
import { AuthenticationCheckComponent } from './components/authentication-check/authentication-check.component';

@NgModule({
    declarations: [
        AuthenticationCheckComponent
    ],
    imports: [
        CommonModule,
        KlsbCommonModule,
        AngularFireAuthModule,
        CrypterModule,
        TextSectionModule
    ],
    exports: [
        AuthenticationCheckComponent
    ]
})
export class AuthenticationModule {}
