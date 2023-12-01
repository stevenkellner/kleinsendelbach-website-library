import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeaderColumn } from '../../types';
import { TrackBy } from '../../../common';

@Component({
    selector: 'mobile-header-item',
    styleUrls: ['./mobile-header-item.component.sass'],
    templateUrl: './mobile-header-item.component.html'
})
export class MobileHeaderItemComponent<HeaderKey extends string> {

    @Input() public headerColumn!: HeaderColumn<HeaderKey>;

    @Input() public expandedHeaderColumnKey!: HeaderKey | null;

    @Output() public topItemClicked = new EventEmitter<HeaderKey>();

    public TrackBy = TrackBy;

    constructor() {}

    public handleTopItemClick() {
        this.topItemClicked.emit(this.headerColumn.key);
    }
}
