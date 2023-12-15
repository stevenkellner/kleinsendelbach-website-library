import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SquadPersonComponent } from './squad-person/squad-person.component';
import { SquadData, TrackBy } from '../../types';
import { DeviceTypeService } from '../../services';

@Component({
    selector: 'squad',
    standalone: true,
    imports: [CommonModule, SquadPersonComponent],
    templateUrl: './squad.component.html',
    styleUrl: './squad.component.sass'
})
export class SquadComponent {

    @Input({ required: true }) public squadData!: SquadData;

    public TrackBy = TrackBy;

    constructor(
        public readonly deviceType: DeviceTypeService
    ) {}
}
