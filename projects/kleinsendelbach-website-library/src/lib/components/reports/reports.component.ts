import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReportGroupComponent } from './report-group/report-group.component';
import { Guid, ReportGroup, TrackBy } from '../../types';

@Component({
    selector: 'reports',
    standalone: true,
    imports: [CommonModule, ReportGroupComponent],
    templateUrl: './reports.component.html',
    styleUrl: './reports.component.sass'
})
export class ReportsComponent<GroupId extends string> {

    @Input({ required: true }) public reportGroups!: ReportGroup<GroupId>[];

    @Input({ required: true }) public reportGroupTitle!: Record<GroupId, string>;

    public TrackBy = TrackBy;

    public expandedReportGroupId: GroupId | null = null;

    public expandedReportId: Guid | null = null;

    public expandReportGroupClicked(id: GroupId) {
        this.expandedReportGroupId = this.expandedReportGroupId === id ? null : id;
        this.expandedReportId = null;
    }

    public expandReportClicked(id: Guid) {
        this.expandedReportId = this.expandedReportId?.guidString === id.guidString ? null : id;
    }
}
