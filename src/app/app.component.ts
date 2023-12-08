
import { Component, HostListener } from '@angular/core';
import { AppearanceColor, Color, DeviceTypeService, StyleConfigService } from 'kleinsendelbach-website-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
    title = 'kleinsendelbach-website-library';

    public constructor(
        public readonly deviceType: DeviceTypeService,
        public readonly styleConfig: StyleConfigService
    ){
        this.styleConfig.setup({
            primary: new AppearanceColor(Color.hex('#C90024')),
            accent: new AppearanceColor(Color.hex('#FFD93D')),
            background: new AppearanceColor(Color.hex('#FFFFFF')),
            secondaryBackground: new AppearanceColor(Color.hex('#FFFFFF')),
            hoveredBackground: new AppearanceColor(Color.hex('#E0E0E0')),
            shadow: new AppearanceColor(Color.hex('#80808080')),
            text: new AppearanceColor(Color.hex('#24252A')),
            secondaryText: new AppearanceColor(Color.hex('#868E90')),
            formStatusSuccess: new AppearanceColor(Color.hex('#54B435')),
            formStatusError: new AppearanceColor(Color.hex('#CE3A0F')),
            formStatusInfo: new AppearanceColor(Color.hex('#868E90')),
            pageBackground: new AppearanceColor(Color.hex('#F0F0F0'))
        })
    }

    @HostListener('window:resize') public onResize() {
        this.deviceType.windowResized();
    }
}
