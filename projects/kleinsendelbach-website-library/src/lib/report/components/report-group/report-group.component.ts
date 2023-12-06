import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Report, ReportGroup } from '../../types';
import { Guid, TrackBy } from '../../../common';

@Component({
    selector: 'report-group',
    templateUrl: './report-group.component.html',
    styleUrls: ['./report-group.component.sass']
})
export class ReportGroupComponent<GroupId extends string> {

    @Input() public title!: string;

    @Input() public reportGroup!: ReportGroup<GroupId>;

    @Input() public isExpanded!: boolean;

    @Input() public expandedReportId!: Guid | null;

    @Output() public expandReportGroupClicked = new EventEmitter<void>();

    @Output() public expandReportClicked = new EventEmitter<Guid>();

    public TrackBy = TrackBy;

    public get reports(): Report[] {
        if (this.isExpanded)
            return this.reportGroup.reports;
        return this.reportGroup.reports.slice(0, 3);
    }
}
