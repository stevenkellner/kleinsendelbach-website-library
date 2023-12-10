import { Component, Input } from '@angular/core';
import { BannerData, BannerItem, TrackBy } from '../../types';
import { DeviceTypeService, LinkService } from '../../services';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'banner',
    standalone: true,
    imports: [CommonModule, FontAwesomeModule],
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.sass'
})
export class BannerComponent<InternalPath extends string> {

    @Input() public bannerData!: BannerData<InternalPath>;

    public TrackBy = TrackBy;

    public currentPage = 1;

    private nextPageTimeout: number | null = null;

    private mouseDownPosition: [number, number] | null = null;

    constructor(
        public readonly deviceType: DeviceTypeService,
        private readonly linkService: LinkService<InternalPath>,
        private readonly faIconLibrary: FaIconLibrary
    ) {
        this.faIconLibrary.addIconPacks(fas, far, fab);
        this.setPage(1);
    }

    public get current(): BannerItem<InternalPath> {
        return this.bannerData[this.currentPage - 1];
    }

    public openCurrentLink() {
        const link = this.linkService.link(this.current.link);
        window.open(link.link, link.target);
    }

    public handleNavBarClick(page: number) {
        this.setPage(page);
    }

    public handleButtonClick(direction: 'left' | 'right') {
        switch (direction) {
        case 'left':
            if (this.currentPage > 1)
                this.setPage(this.currentPage - 1);
            else
                this.setPage(this.bannerData.length);
            break;
        case 'right':
            if (this.currentPage < this.bannerData.length)
                this.setPage(this.currentPage + 1);
            else
                this.setPage(1);
            break;
        default:
            break;
        }
    }

    public onMouseDown(event: MouseEvent | TouchEvent) {
        if (!this.isClickOnNavContainer(event))
            return;
        this.mouseDownPosition = this.getTapPosition(event);
    }

    public onMouseUp(event: MouseEvent | TouchEvent) {
        if (!this.isClickOnNavContainer(event))
            return;
        if (!this.mouseDownPosition)
            return;
        const position = this.getTapPosition(event);
        if (!position)
            return;
        const absX = Math.abs(this.mouseDownPosition[0] - position[0]);
        const absY = Math.abs(this.mouseDownPosition[1] - position[1]);
        if (absX <= 10 && absY <= 10) {
            this.openCurrentLink();
            this.mouseDownPosition = null;
            return;
        }
        if (absY > absX)
            return;
        if (this.deviceType.current === 'desktop' && absX < 250)
            return;
        if (this.deviceType.current === 'tablet' && absX < 150)
            return;
        if (this.deviceType.current === 'mobile' && absX < 50)
            return;
        const direction = this.mouseDownPosition[0] >= position[0] ? 'left' : 'right';
        this.handleButtonClick(direction);
        this.mouseDownPosition = null;
    }

    private getTapPosition(event: MouseEvent | TouchEvent): [number, number] | null {
        if ('pageX' in event && 'pageY' in event)
            return [event.pageX, event.pageY];
        if ('touches' in event) {
            if (event.touches.length !== 1)
                return null;
            const touch = event.touches.item(0);
            if (touch === null)
                return null;
            return [touch.screenX, touch.screenY];
        }
        return null;
    }

    private setPage(page: number) {
        if (this.nextPageTimeout !== null)
            clearTimeout(this.nextPageTimeout);
        this.currentPage = page;
        this.nextPageTimeout = window.setTimeout(() => {
            if (this.currentPage < this.bannerData.length)
                this.setPage(this.currentPage + 1);
            else
                this.setPage(1);
        }, 10000);
    }

    private isClickOnNavContainer(event: MouseEvent | TouchEvent): boolean {
        if (event.target === null)
            return false;
        if (!('id' in event.target) || typeof event.target.id !== 'string')
            return false;
        return event.target.id === 'nav-bar-container' || event.target.id === 'nav-button-container';
    }
}
