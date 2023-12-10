import { Component, Input } from '@angular/core';
import { DeviceTypeService } from '../../services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'box-splitted',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './box-splitted.component.html',
  styleUrl: './box-splitted.component.sass'
})
export class BoxSplittedComponent {

    @Input() public title!: string;

    constructor(
        public readonly deviceType: DeviceTypeService
    ) {}
}
