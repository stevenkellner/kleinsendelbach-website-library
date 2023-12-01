import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkDirective } from './directives/link.directive';
import { AppearanceComponent } from './components/appearance/appearance.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        LinkDirective,
        AppearanceComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [
        LinkDirective,
        AppearanceComponent
    ]
})
export class KlsbCommonModule {}
