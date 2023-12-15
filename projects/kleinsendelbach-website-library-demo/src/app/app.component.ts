import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppearanceColor, Color, StyleConfigService } from 'kleinsendelbach-website-library';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass'
})
export class AppComponent {
    constructor(
        public readonly styleConfig: StyleConfigService
    ){
        this.styleConfig.setup({
            primary: new AppearanceColor(Color.hex('#C90024')),
            accent: new AppearanceColor(Color.hex('#FFD93D')),
            background: new AppearanceColor(Color.hex('#FFFFFF')),
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
}
