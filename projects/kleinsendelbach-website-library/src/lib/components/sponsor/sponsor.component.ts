import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Sponsor, SponsorsType, TrackBy } from '../../types';

@Component({
    selector: 'sponsor',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './sponsor.component.html',
    styleUrl: './sponsor.component.sass'
})
export class SponsorComponent {

    @Input() public sponsor!: Sponsor;

    @Input() public sponsorsType!: SponsorsType | 'complete';

    public TrackBy = TrackBy;
}
