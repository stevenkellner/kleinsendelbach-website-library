import { Component, Input } from '@angular/core';
import { SquadPerson } from '../../../types';

@Component({
    selector: 'squad-person',
    templateUrl: './squad-person.component.html',
    styleUrls: ['./squad-person.component.sass']
})
export class SquadPersonComponent {

    @Input() public person!: SquadPerson;
}
