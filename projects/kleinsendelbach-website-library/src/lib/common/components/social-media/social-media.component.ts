import { AppearanceService } from './../../services/appearance.service';
import { Component, Input } from '@angular/core';
import { SocialMediaData, SocialMediaItem, TrackBy } from '../../types';
import { DeviceTypeService } from '../../services';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.sass']
})
export class SocialMediaComponent {

    @Input() public socialMediaData!: SocialMediaData;

    public TrackBy = TrackBy;

    constructor(
        public readonly deviceType: DeviceTypeService,
        public readonly appearance: AppearanceService
    ) {}

    public isIcon(image: SocialMediaItem['image']): image is IconProp {
        return !(typeof image === 'object' && 'lightModeSource' in image);
    }
}
