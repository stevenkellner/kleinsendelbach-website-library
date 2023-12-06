import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DeviceTypeService, MarkdownParser, StyleConfigService, UtcDate } from '../../../common';
import { Report } from '../../types';

@Component({
    selector: 'report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.sass']
})
export class ReportComponent implements AfterViewInit {

    @Input() public report!: Report;

    @Input() public isExpanded!: boolean;

    @Output() public expandReportClicked = new EventEmitter<void>();

    @ViewChild('message') public messageElement: ElementRef<HTMLElement> | null = null;

    public constructor(
        public readonly deviceType: DeviceTypeService,
        public readonly styleConfig: StyleConfigService
    ) {}

    public ngAfterViewInit() {
        if (!this.messageElement)
            return;
        const elements = MarkdownParser.parse(this.report.message);
        if (elements === null) {
            this.messageElement.nativeElement.style.color = this.styleConfig.css('primary');
            this.messageElement.nativeElement.append('Es gab ein Fehler bei der Nachricht.');
        } else {
            for (const element of elements)
                this.messageElement.nativeElement.append(element);
        }
    }

    public get isRecent(): boolean {
        const referenceDate = UtcDate.now.advanced({ day: -3 });
        return this.report.createDate.compare(referenceDate) !== 'less';
    }
}
