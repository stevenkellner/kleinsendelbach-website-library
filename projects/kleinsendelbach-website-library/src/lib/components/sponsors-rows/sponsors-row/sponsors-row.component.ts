import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SponsorComponent } from '../../sponsor/sponsor.component';
import { Sponsor, SponsorsType, TrackBy } from '../../../types';

@Component({
    selector: 'sponsors-row',
    standalone: true,
    imports: [CommonModule, SponsorComponent],
    templateUrl: './sponsors-row.component.html',
    styleUrl: './sponsors-row.component.sass'
})
export class SponsorsRowComponent {

    @Input({ required: true }) public sponsors!: Sponsor[];

    @Input({ required: true }) public type!: SponsorsType;

    @Input({ required: true }) public sponsorElementWidth!: number;

    public TrackBy = TrackBy;
}
