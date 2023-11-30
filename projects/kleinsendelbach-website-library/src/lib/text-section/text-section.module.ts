import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextSectionComponent } from './components/text-section/text-section.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

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
export class TextSectionModule {
    constructor(
        faIconLibrary: FaIconLibrary
    ) {
        faIconLibrary.addIconPacks(fas, far, fab);
    }
}
