import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KlsbCommonModule } from '../common';
import { CookieSelectorComponent } from './components/selector/selector.component';

@NgModule({
    declarations: [
        CookieSelectorComponent
    ],
    imports: [
        CommonModule,
        KlsbCommonModule
    ],
    exports: [
        CookieSelectorComponent
    ]
})
export class CookieSelectorModule {}
