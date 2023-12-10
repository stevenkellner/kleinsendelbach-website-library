import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Sponsor, TrackBy } from '../../types';
import { SponsorComponent } from '../sponsor/sponsor.component';

@Component({
    selector: 'sponsors',
    standalone: true,
    imports: [CommonModule, SponsorComponent],
    templateUrl: './sponsors.component.html',
    styleUrl: './sponsors.component.sass'
})
export class SponsorsComponent {

    @Input() public sponsors!: Sponsor[];

    public TrackBy = TrackBy;
}
