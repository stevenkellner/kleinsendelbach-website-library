import { Component, Input } from '@angular/core';
import { Sponsor, SponsorsType, TrackBy } from '../../../types';

@Component({
  selector: 'sponsors-row',
  templateUrl: './sponsors-row.component.html',
  styleUrls: ['./sponsors-row.component.sass']
})
export class SponsorsRowComponent {

    @Input() public sponsors!: Sponsor[];

    @Input() public type!: SponsorsType;

    @Input() public sponsorElementWidth!: number;

    public TrackBy = TrackBy;
}
