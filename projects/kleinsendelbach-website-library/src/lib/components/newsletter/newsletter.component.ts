import { Component, Input } from '@angular/core';
import { Element, NewsletterData, Sponsor, SponsorsType, compactMap, entries, group } from '../../types';
import { CommonModule } from '@angular/common';
import { StyleConfigService } from '../../services';

@Component({
    selector: 'newsletter',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './newsletter.component.html',
    styleUrl: './newsletter.component.sass'
})
export class NewsletterComponent {

    @Input({ required: true }) public newsletterData!: NewsletterData;

    @Input() public scaling: 'newsletter' | 'website' = 'newsletter';

    constructor(
        public readonly styleConfig: StyleConfigService
    ) {}

    public get socialMediaList(): Element<NewsletterData['socialMedia']>[][] {
        return group(this.newsletterData.socialMedia, 2);
    }

    public get sponsorsList(): { title: string; sponsors: Sponsor[][] }[] {
        return compactMap(entries(this.newsletterData.sponsors), ({ key, value }) => {
            if (value === null)
                return null;
            return {
                title: SponsorsType.title[key],
                sponsors: group(value, 2)
            };
        });
    }
}
