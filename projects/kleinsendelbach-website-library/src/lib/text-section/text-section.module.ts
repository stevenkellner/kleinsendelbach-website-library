import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextSectionComponent } from './components/text-section/text-section.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        TextSectionComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [
        TextSectionComponent
    ]
})
export class TextSectionModule {}
