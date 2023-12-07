import { Component, Input } from '@angular/core';
import { DeviceTypeService } from '../../services';

@Component({
  selector: 'box-splitted',
  templateUrl: './box-splitted.component.html',
  styleUrls: ['./box-splitted.component.sass']
})
export class BoxSplittedComponent {

    @Input() public title!: string;

    constructor(
        public readonly deviceType: DeviceTypeService
    ) {}
}
