import { Component } from '@angular/core';
import { BfvWidgetComponent } from 'kleinsendelbach-website-library';

@Component({
    selector: 'bfv-widget-page',
    standalone: true,
    imports: [BfvWidgetComponent],
    templateUrl: './bfv-widget.page.html',
    styleUrls: ['./bfv-widget.page.sass']
})
export class BfvWidgetPage {

}
