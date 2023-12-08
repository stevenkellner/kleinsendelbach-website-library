import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextSectionComponent } from './components';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
        faIconLibrary.addIconPacks(fas);
    }
}
