import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KlsbCommonModule } from '../common';
import { HeaderComponent, DesktopHeaderComponent, DesktopHeaderItemComponent, MobileHeaderComponent, MobileHeaderItemComponent } from './components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        HeaderComponent,
        DesktopHeaderComponent,
        DesktopHeaderItemComponent,
        MobileHeaderComponent,
        MobileHeaderItemComponent
    ],
    imports: [
        CommonModule,
        KlsbCommonModule,
        FontAwesomeModule
    ],
    exports: [
        HeaderComponent,
    ]
})
export class HeaderModule {}
