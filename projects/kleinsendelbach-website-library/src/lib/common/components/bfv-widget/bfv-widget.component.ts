import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AppearanceService, CookieSelectionService, StyleConfigService } from '../../services';

@Component({
  selector: 'bfv-widget',
  templateUrl: './bfv-widget.component.html',
  styleUrls: ['./bfv-widget.component.sass']
})
export class BfvWidgetComponent implements OnInit, AfterViewInit, OnDestroy {

    @Input() public teamId!: string;

    @ViewChild('bfvWidget') public bfvWidget: ElementRef<HTMLElement> | null = null;

    public functionalityCookiesSelected: boolean = false;

    constructor(
        public readonly appearanceService: AppearanceService,
        public readonly cookieSelectionService: CookieSelectionService,
        public readonly styleConfig: StyleConfigService
    ) {}

    public ngOnInit() {
        this.functionalityCookiesSelected = this.cookieSelectionService.cookiesSelection !== null && this.cookieSelectionService.cookiesSelection.functionality === 'selected';
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
        if (!this.bfvWidget || !this.functionalityCookiesSelected)
            return;
        this.bfvWidget.nativeElement.innerHTML = '';
        const options = {
            backgroundNav: this.styleConfig.css('text'),
            colorClubName: this.styleConfig.css('primary'),
            colorNav: this.styleConfig.css('background'),
            colorResults: `${this.styleConfig.css('text')};}</style><link rel='stylesheet' href='${window.location.protocol}//${window.location.hostname}/assets/other/bfvWidgetStyle.css'><style type='text/css'>xy{x:y`,
            height: '100%',
            selectedTab: 'teammatches',
            width: '100%'
        };
        const iFrame = document.createElement('iframe');
        iFrame.setAttribute('allowFullScreen', 'true');
        iFrame.width = '100%';
        iFrame.height = '100%';
        iFrame.style.border = 'none';
        const bfvHost = `https://widget-prod.bfv.de`;
        const appPath = `widget/widgetresource/iframe${document.location.protocol === 'https:' ? '/ssl' : ''}?url=${window.location.hostname}`;
        iFrame.src = `${bfvHost}/${appPath}&widget=${encodeURIComponent(`widget/team/complete/team${this.teamId}/${options.selectedTab}?css=${encodeURIComponent(JSON.stringify(options))}&referrer=${window.location.hostname}`)}`;
        this.bfvWidget.nativeElement.appendChild(iFrame);
    }
}
