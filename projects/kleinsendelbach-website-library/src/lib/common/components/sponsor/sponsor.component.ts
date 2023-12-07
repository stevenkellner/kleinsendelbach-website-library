import { Component, Input } from '@angular/core';
import { Sponsor, SponsorsType, TrackBy } from '../../types';

@Component({
  selector: 'sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.sass']
})
export class SponsorComponent {

    @Input() public sponsor!: Sponsor;

    @Input() public sponsorsType!: SponsorsType | 'complete';

    public TrackBy = TrackBy;
}
