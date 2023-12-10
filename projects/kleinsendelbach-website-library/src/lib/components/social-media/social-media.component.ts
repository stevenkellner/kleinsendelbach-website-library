import { Component, Input } from '@angular/core';
import { SocialMediaData, SocialMediaItem, TrackBy } from '../../types';
import { AppearanceService, DeviceTypeService } from '../../services';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { LinkDirective } from '../../directives';

@Component({
    selector: 'social-media',
    standalone: true,
    imports: [CommonModule, FontAwesomeModule, LinkDirective],
    templateUrl: './social-media.component.html',
    styleUrl: './social-media.component.sass'
})
export class SocialMediaComponent<InternalPath extends string> {

    @Input() public socialMediaData!: SocialMediaData<InternalPath>;

    public TrackBy = TrackBy;

    constructor(
        public readonly deviceType: DeviceTypeService,
        public readonly appearance: AppearanceService,
        private readonly faIconLibrary: FaIconLibrary
    ) {
        this.faIconLibrary.addIconPacks(fas, far, fab);
    }

    public isIcon(image: SocialMediaItem<InternalPath>['image']): image is IconProp {
        return !(typeof image === 'object' && 'lightModeSource' in image);
    }

}
