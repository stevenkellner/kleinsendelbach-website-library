import { Component, Input } from '@angular/core';
import {  SponsorsData, SponsorsType, TrackBy, compactMap, recordKeys } from '../../types';
import { DeviceTypeService } from '../../services';

@Component({
  selector: 'sponsors-rows',
  templateUrl: './sponsors-rows.component.html',
  styleUrls: ['./sponsors-rows.component.sass']
})
export class SponsorsRowsComponent {

    @Input() public sponsorsData!: SponsorsData;

    public TrackBy = TrackBy;

    private readonly animationDurationMultiplier: Record<SponsorsType, number> = { main: 15, normal: 5, small: 2 };

    public readonly sponsorElementWidth: Record<SponsorsType, number> = { main: 700, normal: 300, small: 200 };

    constructor(
        public readonly deviceType: DeviceTypeService
    ) {}

    public get sponsorsTypes(): SponsorsType[] {
        return compactMap(recordKeys(this.sponsorsData), sponsorsType => {
            if (this.sponsorsData[sponsorsType] === null)
                return null;
            return sponsorsType;
        });
    }

    public animationDuration(type: SponsorsType): string {
        const sponsors = this.sponsorsData[type];
        if (!sponsors)
            return '0s';
        return `${sponsors.length * this.animationDurationMultiplier[type]}s`;
    }

    public counts(type: SponsorsType): null[] {
        const sponsors = this.sponsorsData[type];
        if (!sponsors)
            return [];
        return new Array<null>(Math.ceil(document.body.offsetWidth / (this.sponsorElementWidth[type] * sponsors.length)) + 1);
    }
}
