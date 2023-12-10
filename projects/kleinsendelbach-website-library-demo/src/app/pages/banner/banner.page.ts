import { Component } from '@angular/core';
import { BannerComponent, BannerData, Link } from 'kleinsendelbach-website-library';

@Component({
  selector: 'banner-page',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './banner.page.html',
  styleUrl: './banner.page.sass'
})
export class BannerPage {
    public bannerData: BannerData<never> = [
        {
            imageSource: 'https://svkleinsendelbach-website.web.app/assets/images/mannschaft.png',
            isCurrent: true,
            link: Link.external('Banner 1', 'https://google.com'),
            subTitle: '1. und 2. Mannschaft 2019 / 2020',
            title: 'Herren Mannschaft'
        },
        {
            imageSource: 'https://svkleinsendelbach-website.web.app/assets/images/kleinfeldmannschaften.jpg',
            isCurrent: false,
            link: Link.external('Banner 1', 'https://google.com'),
            subTitle: null,
            title: 'Kleinfeld Mannschaften'
        }
    ];
}
