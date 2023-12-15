import { Component, Input } from '@angular/core';
import { NavigationBarData, NavigationItem, TrackBy } from '../../types';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
    selector: 'navigation-bar',
    standalone: true,
    imports: [CommonModule, ButtonComponent],
    templateUrl: './navigation-bar.component.html',
    styleUrl: './navigation-bar.component.sass'
})
export class NavigationBarComponent<InternalPathKey extends string> {

    @Input({ required: true }) navigationBarData!: NavigationBarData<InternalPathKey>;

    public TrackBy = TrackBy;

    public navigationItems(alignment: NavigationItem<InternalPathKey>['alignment']): NavigationItem<InternalPathKey>[] {
        return this.navigationBarData.filter(navigationItem => navigationItem.alignment === alignment);
    }
}
