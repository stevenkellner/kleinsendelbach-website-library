import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeaderColumn, TrackBy } from '../../../types';
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
export class DesktopHeaderItemComponent<HeaderKey extends string, InternalPath extends string> {

    @Input() public headerColumn!: HeaderColumn<HeaderKey, InternalPath>;

    @Input() public expandedHeaderColumnKey!: HeaderKey | null;

    @Output() public topItemClicked = new EventEmitter<HeaderKey>();

    public TrackBy = TrackBy;

    constructor(
        private readonly faIconLibrary: FaIconLibrary
    ) {
        this.faIconLibrary.addIconPacks(fas, far, fab);
    }

    public handleTopItemClick() {
        this.topItemClicked.emit(this.headerColumn.key);
    }
}
