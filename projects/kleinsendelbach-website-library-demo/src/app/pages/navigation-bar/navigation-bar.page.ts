import { Component } from '@angular/core';
import { NavigationBarComponent, NavigationBarData } from 'kleinsendelbach-website-library';

@Component({
    selector: 'navigation-bar-page',
    standalone: true,
    imports: [NavigationBarComponent],
    templateUrl: './navigation-bar.page.html',
    styleUrl: './navigation-bar.page.sass'
})
export class NavigationBarPage {

    public navigationBarData1: NavigationBarData<never> = [
        { text: 'Button 1', alignment: 'left', link: null, action: null },
        { text: 'Button 2', alignment: 'left', link: null, action: null }
    ];

    public navigationBarData2: NavigationBarData<never> = [
        { text: 'Button 1', alignment: 'center', link: null, action: null },
        { text: 'Button 2', alignment: 'center', link: null, action: null }
    ];

public navigationBarData3: NavigationBarData<never> = [
        { text: 'Button 1', alignment: 'right', link: null, action: null },
        { text: 'Button 2', alignment: 'right', link: null, action: null }
    ];

    public navigationBarData4: NavigationBarData<never> = [
        { text: 'Button 3', alignment: 'center', link: null, action: null },
        { text: 'Button 4', alignment: 'right', link: null, action: null },
        { text: 'Button 1', alignment: 'left', link: null, action: null },
        { text: 'Button 2', alignment: 'left', link: null, action: null },
        { text: 'Button 5', alignment: 'right', link: null, action: null }
    ];

    public navigationBarData5: NavigationBarData<never> = [
        { text: 'Button 1', alignment: 'left', link: null, action: null },
        { text: 'Button 2', alignment: 'right', link: null, action: null }
    ];

    public navigationBarData6: NavigationBarData<never> = [
        { text: 'Button 1', alignment: 'center', link: null, action: null },
        { text: 'Button 2', alignment: 'right', link: null, action: null },
        { text: 'Button 3', alignment: 'right', link: null, action: null }
    ];

    public navigationBarData7: NavigationBarData<never> = [
        { text: 'Button 1', alignment: 'left', link: null, action: null },
        { text: 'Button 2', alignment: 'left', link: null, action: null },
        { text: 'Button 3', alignment: 'right', link: null, action: null }
    ];
}
