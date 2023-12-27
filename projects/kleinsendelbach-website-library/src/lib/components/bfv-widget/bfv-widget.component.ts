import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AppearanceService, CookieSelectionService, StyleConfigService, WindowService } from '../../services';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
    selector: 'bfv-widget',
    standalone: true,
    imports: [CommonModule, ButtonComponent],
    templateUrl: './bfv-widget.component.html',
    styleUrl: './bfv-widget.component.sass'
})
export class BfvWidgetComponent implements OnInit, AfterViewInit, OnDestroy {

    @Input({ required: true }) public teamId!: string;

    @ViewChild('bfvWidget') public bfvWidget: ElementRef<HTMLElement> | null = null;

    public functionalityCookiesSelected: boolean = false;

    constructor(
        public readonly appearanceService: AppearanceService,
        public readonly cookieSelectionService: CookieSelectionService,
        public readonly styleConfig: StyleConfigService,
        private readonly windowService: WindowService
    ) {}

    public ngOnInit() {
        this.functionalityCookiesSelected = this.cookieSelectionService.cookieSelection !== null && this.cookieSelectionService.cookieSelection.functionality === 'selected';
        this.cookieSelectionService.listener.add('bfv-widget', selection => {
            this.functionalityCookiesSelected = selection.functionality === 'selected';
            this.appendBfvWidgetChild();
        });
        this.appearanceService.listener.add('bfv-widget', () => {
            this.appendBfvWidgetChild();
        });
    }

    public ngAfterViewInit() {
        this.appendBfvWidgetChild();
    }

    public ngOnDestroy(): void {
        this.cookieSelectionService.listener.remove('bfv-widget');
        this.appearanceService.listener.remove('bfv-widget');
    }

    public acceptFunctionalityCookies() {
        this.cookieSelectionService.changeCookieSelection('functionality', 'selected');
    }

    private appendBfvWidgetChild() {
        if (!this.bfvWidget || !this.functionalityCookiesSelected || !this.windowService.location)
            return;
        this.bfvWidget.nativeElement.innerHTML = '';
        const options = {
            colorResults: `;}body{background-color:${this.styleConfig.css('pageBackground')};}#bfv-team-widget-header>div>div{background:${this.styleConfig.css('background')}!important;&>div>table>tbody>tr{&:nth-child(1)>td:nth-child(2)>h3{color:${this.styleConfig.css('primary')};}&:nth-child(2)>td>h3>small{color:${this.styleConfig.css('secondaryText')};}}}#header-competition-name{color:${this.styleConfig.css('secondaryText')};}#bfv-refresh{background-color:${this.styleConfig.css('background')};border-color:${this.styleConfig.css('text')};&>span{color:${this.styleConfig.css('text')};}}#bfv-widget-footer{background:${this.styleConfig.css('background')}!important;border-top:1px solid ${this.styleConfig.css('secondaryText')}!important;&>h6>a{color:${this.styleConfig.css('secondaryText')}}}#bfv-team-widget-navbar>div>ul{&,&>li,&>li>a{background-color:${this.styleConfig.css('text')};color:${this.styleConfig.css('background')}!important;}}#bfv-wettbewerb-spieltag-fixed-table>div>div{background-color:${this.styleConfig.css('text')};&>span{color:${this.styleConfig.css('background')};}}#bfv-wettbewerb-spieltag-row,#bfv-widget-team-competition-tables-subnav>div,#bfv-widget-team-player-subnav>div{&>div{background-color:${this.styleConfig.css('background')};&>a>nobr,&>a{color:${this.styleConfig.css('secondaryText')};}&.active{background-color:${this.styleConfig.css('primary')};&>a>nobr,&>a{color:${this.styleConfig.css('primary')};}}}}#bfv-club-team-matches-container,#bfv-competition-matches-container,#bfv-competition-table-scroll-wrapper,#bfv-team-squad-container>div{&>div>div.list-group-item.row.header,&>table>thead>tr>th{background:${this.styleConfig.css('hoveredBackground')};color:${this.styleConfig.css('text')};font-weight:normal;}}#bfv-club-team-matches-container,#bfv-competition-matches-container,#bfv-competition-table-scroll-wrapper,#bfv-team-squad-container>div{&>div>div.list-group-item.row:not(.header),&>table>tbody>tr{&,&>table>tbody>tr>td{background:${this.styleConfig.css('background')};color:${this.styleConfig.css('secondaryText')};&.bfv-match-list-item-result.bfv-base-widget-color{color:${this.styleConfig.css('text')};}&.bfv-base-widget-color-club-name{color:${this.styleConfig.css('primary')};font-weight:normal;}}}}xy:{x:y`,
            height: '100%',
            selectedTab: 'teammatches',
            width: '100%'
        };
        const iFrame = this.windowService.createElement('iframe');
        if (!iFrame)
            return;
        iFrame.setAttribute('allowFullScreen', 'true');
        iFrame.width = '100%';
        iFrame.height = '100%';
        iFrame.style.border = 'none';
        const bfvHost = `https://widget-prod.bfv.de`;
        const appPath = `widget/widgetresource/iframe${this.windowService.location.protocol === 'https:' ? '/ssl' : ''}?url=${this.windowService.location.hostname}`;
        iFrame.src = `${bfvHost}/${appPath}&widget=${encodeURIComponent(`widget/team/complete/team${this.teamId}/${options.selectedTab}?css=${encodeURIComponent(JSON.stringify(options))}&referrer=${this.windowService.location.hostname}`)}`;
        this.bfvWidget.nativeElement.appendChild(iFrame);
    }
}
