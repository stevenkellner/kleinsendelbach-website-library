import { NgModule } from '@angular/core';
import { TextSectionModule } from './text-section/text-section.module';
import { KlsbCommonModule } from './common';

@NgModule({
    declarations: [],
    imports: [
        TextSectionModule,
        KlsbCommonModule
    ],
    exports: [
        TextSectionModule,
        KlsbCommonModule
    ]
})
export class KleinsendelbachWebsiteLibraryModule {}
