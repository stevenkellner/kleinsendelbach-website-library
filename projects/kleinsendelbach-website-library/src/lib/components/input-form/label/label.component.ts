import { Component, Input } from '@angular/core';

@Component({
    selector: 'label',
    standalone: true,
    imports: [],
    templateUrl: './label.component.html',
    styleUrl: './label.component.sass'
})
export class LabelComponent {

    @Input() public text!: string;
}
