import { Component, Input } from '@angular/core';
import { Sponsor, TrackBy } from '../../types';

@Component({
  selector: 'sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.sass']
})
export class SponsorsComponent {

    @Input() public sponsors!: Sponsor[];

    public TrackBy = TrackBy;
}
