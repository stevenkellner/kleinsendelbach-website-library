import { Component, HostListener } from '@angular/core';
import { DeviceTypeService } from 'kleinsendelbach-website-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
    title = 'kleinsendelbach-website-library';

    public constructor(
        public readonly deviceType: DeviceTypeService
    ){}

    @HostListener('window:resize') public onResize() {
        this.deviceType.windowResized();
    }
}
