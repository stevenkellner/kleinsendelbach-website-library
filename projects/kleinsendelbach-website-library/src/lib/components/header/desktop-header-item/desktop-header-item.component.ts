import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeaderColumn, HeaderItem, TrackBy } from '../../../types';
import { CommonModule } from '@angular/common';
import { LinkDirective } from '../../../directives';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'desktop-header-item',
    standalone: true,
    imports: [CommonModule, LinkDirective, FontAwesomeModule],
    templateUrl: './desktop-header-item.component.html',
    styleUrl: './desktop-header-item.component.sass'
})
export class DesktopHeaderItemComponent<HeaderKey extends string, InternalPathKey extends string> {

    @Input({ required: true }) public headerColumn!: HeaderColumn<HeaderKey, InternalPathKey>;

    @Input({ required: true }) public expandedHeaderColumnKey!: string | null;

    @Output() public topItemClicked = new EventEmitter<string>();

    public TrackBy = TrackBy;

    constructor(
        private readonly faIconLibrary: FaIconLibrary
    ) {
        this.faIconLibrary.addIconPacks(fas, far, fab);
    }

    public isOnlyTopItem(headerColumn: HeaderColumn<HeaderKey, InternalPathKey>): headerColumn is HeaderItem<HeaderKey, InternalPathKey> {
        return HeaderColumn.isOnlyTopItem(headerColumn);
    }

    public handleTopItemClick() {
        if (!this.isOnlyTopItem(this.headerColumn))
            this.topItemClicked.emit(this.headerColumn.key);
    }
}
