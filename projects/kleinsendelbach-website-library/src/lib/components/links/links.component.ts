import { Component, Input } from '@angular/core';
import { LinkDirective } from '../../directives';
import { LinksData, TrackBy } from '../../types';
import { DeviceTypeService } from '../../services';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'links',
    standalone: true,
    imports: [CommonModule, FontAwesomeModule, LinkDirective],
    templateUrl: './links.component.html',
    styleUrl: './links.component.sass'
})
export class LinksComponent<InternalPath extends string> {

    @Input() public linksData!: LinksData<InternalPath>;

    public TrackBy = TrackBy;

    constructor(
        public readonly deviceType: DeviceTypeService,
        private readonly faIconLibrary: FaIconLibrary
    ) {
        this.faIconLibrary.addIconPacks(fas, far, fab);
    }
}
