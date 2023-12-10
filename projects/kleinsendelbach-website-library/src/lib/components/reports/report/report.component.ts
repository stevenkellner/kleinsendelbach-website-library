import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DeviceTypeService, StyleConfigService } from '../../../services';
import { UtcDate, Report, MarkdownParser } from '../../../types';
import { ButtonComponent } from '../../button/button.component';

@Component({
    selector: 'report',
    standalone: true,
    imports: [CommonModule, ButtonComponent],
    templateUrl: './report.component.html',
    styleUrl: './report.component.sass'
})
export class ReportComponent implements AfterViewInit {

    @Input() public report!: Report;

    @Input() public isExpanded!: boolean;

    @Output() public expandReportClicked = new EventEmitter<void>();

    @ViewChild('message') public messageElement: ElementRef<HTMLElement> | null = null;

    public isClipped: boolean = false;

    constructor(
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
        setTimeout(() => {
            const height = this.messageElement?.nativeElement.clientHeight;
            this.isClipped = (height ?? 0) >= 150;
        }, 1);
    }

    public get isRecent(): boolean {
        const referenceDate = UtcDate.now.advanced({ day: -3 });
        return this.report.createDate.compare(referenceDate) !== 'less';
    }
}
