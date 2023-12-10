import { Component, Input } from '@angular/core';
import { SquadPerson } from '../../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'squad-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './squad-person.component.html',
  styleUrl: './squad-person.component.sass'
})
export class SquadPersonComponent {

    @Input() public person!: SquadPerson;
}
