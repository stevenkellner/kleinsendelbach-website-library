import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './components/events/events.component';
import { KlsbCommonModule } from '../common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EventComponent } from './components/event/event.component';
import { EventGroupComponent } from './components/event-group/event-group.component';

@NgModule({
    declarations: [
        EventsComponent,
        EventComponent,
        EventGroupComponent
    ],
    imports: [
        CommonModule,
        KlsbCommonModule,
        FontAwesomeModule
    ],
    exports: [
        EventsComponent
    ]
})
export class EventModule {}
