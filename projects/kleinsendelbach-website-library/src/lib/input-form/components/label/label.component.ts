import { Component, Input } from '@angular/core';

@Component({
    selector: 'label',
    templateUrl: './label.component.html',
    styleUrls: ['./label.component.sass']
})
export class LabelComponent {
    @Input() public text!: string;
}
