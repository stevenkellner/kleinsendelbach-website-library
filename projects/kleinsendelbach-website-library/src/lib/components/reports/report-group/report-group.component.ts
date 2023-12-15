import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReportGroup, Report, Guid, TrackBy } from '../../../types';
import { CommonModule } from '@angular/common';
import { ReportComponent } from '../report/report.component';
import { ButtonComponent } from '../../button/button.component';

@Component({
    selector: 'report-group',
    standalone: true,
    imports: [CommonModule, ReportComponent, ButtonComponent],
    templateUrl: './report-group.component.html',
    styleUrl: './report-group.component.sass'
})
export class ReportGroupComponent<GroupId extends string> {

    @Input({ required: true }) public title!: string;

    @Input({ required: true }) public reportGroup!: ReportGroup<GroupId>;

    @Input({ required: true }) public isExpanded!: boolean;

    @Input({ required: true }) public expandedReportId!: Guid | null;

    @Output() public expandReportGroupClicked = new EventEmitter<void>();

    @Output() public expandReportClicked = new EventEmitter<Guid>();

    public TrackBy = TrackBy;

    public get reports(): Report[] {
        if (this.isExpanded)
            return this.reportGroup.reports;
        return this.reportGroup.reports.slice(0, 3);
    }
}
