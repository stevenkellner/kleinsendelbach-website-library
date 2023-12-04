import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkDirective } from './directives/link.directive';
import { AppearanceComponent } from './components/appearance/appearance.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './components/button/button.component';
import { ResultDisplayComponent } from './components/result-display/result-display.component';

@NgModule({
    declarations: [
        LinkDirective,
        AppearanceComponent,
        ButtonComponent,
        ResultDisplayComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [
        LinkDirective,
        AppearanceComponent,
        ButtonComponent,
        ResultDisplayComponent
    ]
})
export class KlsbCommonModule {}
