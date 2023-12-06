import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './components/report/report.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ReportGroupComponent } from './components/report-group/report-group.component';
import { KlsbCommonModule } from '../common';
import { TextSectionModule } from '../text-section';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        ReportComponent,
        ReportsComponent,
        ReportGroupComponent
    ],
    imports: [
        CommonModule,
        KlsbCommonModule,
        TextSectionModule,
        FontAwesomeModule
    ],
    exports: [
        ReportsComponent
    ]
})
export class ReportModule { }
