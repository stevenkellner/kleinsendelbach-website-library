import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { KlsbCommonModule } from '../common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        FooterComponent
    ],
    imports: [
        CommonModule,
        KlsbCommonModule,
        FontAwesomeModule
    ],
    exports: [
        FooterComponent
    ]
})
export class FooterModule {}
