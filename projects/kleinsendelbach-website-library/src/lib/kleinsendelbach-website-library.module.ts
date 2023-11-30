import { NgModule } from '@angular/core';
import { TextSectionModule } from './text-section/text-section.module';
import { LinkModule } from './link';

@NgModule({
    declarations: [],
    imports: [
        TextSectionModule,
        LinkModule
    ],
    exports: [
        TextSectionModule,
        LinkModule
    ]
})
export class KleinsendelbachWebsiteLibraryModule {}
