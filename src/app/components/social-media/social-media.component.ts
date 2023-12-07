import { Component } from '@angular/core';
import { Link, SocialMediaData } from 'kleinsendelbach-website-library';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.sass']
})
export class SocialMediaComponent {
    public socialMediaData: SocialMediaData = [
        {
            image: ['fab', 'facebook-f'],
            link: Link.external('Facebook', 'https://www.facebook.com/svkleinsendelbach/', true),
            name: 'Facebook',
            title: 'SV Kleinsendelbach e.V.'
        },
        {
            image: ['fab', 'discord'],
            link: Link.external('Discord', 'https://discord.gg/gpJMrajz7q', true),
            name: 'Discord',
            title: 'SV Kleinsendelbach e.V.'
        },
        {
            image: ['fab', 'instagram'],
            link: Link.external('Instagram', 'https://www.instagram.com/sgkleinsendelbachhetzles/', true),
            name: 'Instagram',
            title: 'SG Kleinsendelbach / Hetzles'
        },
        {
            image: {
                darkModeSource: 'https://svkleinsendelbach-website.web.app/assets/images/sg-logo-dark-appearence.png',
                lightModeSource: 'https://svkleinsendelbach-website.web.app/assets/images/sg-logo.png'
            },
            link: Link.external('SG Kleinsendelbach / Hetzles', 'http://sg-kh.de', true),
            name: 'Website der SG',
            title: 'SG Kleinsendelbach / Hetzles'
        }
    ];
}
