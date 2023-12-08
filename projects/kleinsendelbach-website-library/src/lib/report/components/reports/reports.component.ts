import { TrackBy } from 'projects/kleinsendelbach-website-library/src/lib/common';
import { Component, Input } from '@angular/core';
import { ReportGroup } from '../../types';
import { Result, Guid } from '../../../common';

@Component({
    selector: 'reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.sass']
})
export class ReportsComponent<GroupId extends string> {

    @Input() public reportGroups!: ReportGroup<GroupId>[];

    @Input() public reportGroupTitle!: Record<GroupId, string>;

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
