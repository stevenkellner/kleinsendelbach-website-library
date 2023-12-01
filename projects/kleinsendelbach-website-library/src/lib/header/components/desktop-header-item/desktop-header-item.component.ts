import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeaderColumn } from '../../types';
import { TrackBy } from '../../../common';

@Component({
    selector: 'desktop-header-item',
    styleUrls: ['./desktop-header-item.component.sass'],
    templateUrl: './desktop-header-item.component.html'
})
export class DesktopHeaderItemComponent<HeaderKey extends string> {

    @Input() public headerColumn!: HeaderColumn<HeaderKey>;

    @Input() public expandedHeaderColumnKey!: HeaderKey | null;

    @Output() public topItemClicked = new EventEmitter<HeaderKey>();

    public TrackBy = TrackBy;

    constructor() {}

    public handleTopItemClick() {
        this.topItemClicked.emit(this.headerColumn.key);
    }
}
