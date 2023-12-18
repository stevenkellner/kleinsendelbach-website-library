import { Component } from '@angular/core';
import { NewsletterComponent, NewsletterData } from 'kleinsendelbach-website-library';
import { sponsorsData } from '../sponsors/sponsors.page';

@Component({
    selector: 'newsletter-page',
    standalone: true,
    imports: [NewsletterComponent],
    templateUrl: './newsletter.page.html',
    styleUrl: './newsletter.page.sass'
})
export class NewsletterPage {

    public newsletterData: NewsletterData = {
        name: 'SV Kleinsendelbach',
        month: 'Dezember',
        year: '2023',
        logoSrc: 'https://svkleinsendelbach-website.web.app/assets/images/svk-logo.svg',
        title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        unsubscribeLink: 'asdf',
        websiteLink: {
            title: 'www.svkleinsendelbach-website.web.app',
            link: 'https://svkleinsendelbach-website.web.app'
        },
        notCorrectShownLink: 'https://google.com',
        content: [
            {
                title: 'Neues aus unseren Abteilungen',
                imageSrc: 'https://cdn1.epicgames.com/offer/615659ff36244d258ef6c6a827e32c5d/EGS_BrothersATaleofTwoSons_StarbreezeStudiosAB_S1_2560x1440-a1455bfc980acece23a9fc9824a94e17',
                items: [
                    {
                        title: 'Title 1',
                        link: 'https://google.com',
                        subitems: []
                    },
                    {
                        title: 'Title 2',
                        link: null,
                        subitems: [
                            {
                                title: 'Subitem 1',
                                subtitle: null
                            },
                            {
                                title: 'Subitem 2',
                                subtitle: 'asdf'
                            },
                            {
                                title: 'Subitem 3',
                                subtitle: null
                            }
                        ]
                    },
                    {
                        title: 'Title 3',
                        link: 'https://google.com',
                        subitems: [
                            {
                                title: 'Subitem 1',
                                subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'
                            },
                            {
                                title: 'Subitem 2',
                                subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
                            },
                            {
                                title: 'Subitem 3',
                                subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Neues aus unseren Abteilungen',
                imageSrc: null,
                items: [
                    {
                        title: 'Title 1',
                        link: 'https://google.com',
                        subitems: []
                    },
                    {
                        title: 'Title 2',
                        link: null,
                        subitems: [
                            {
                                title: 'Subitem 1',
                                subtitle: null
                            },
                            {
                                title: 'Subitem 2',
                                subtitle: 'asdf'
                            },
                            {
                                title: 'Subitem 3',
                                subtitle: null
                            }
                        ]
                    },
                    {
                        title: 'Title 3',
                        link: 'https://google.com',
                        subitems: [
                            {
                                title: 'Subitem 1',
                                subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'
                            },
                            {
                                title: 'Subitem 2',
                                subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
                            },
                            {
                                title: 'Subitem 3',
                                subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
                            }
                        ]
                    }
                ]
            }
        ],
        socialMedia: [
            {
                imageSrc: 'https://svkleinsendelbach-website.web.app/assets/images/svk-logo-dark.png',
                name: 'Website',
                title: 'SV Kleinsendelbach e.V.',
                link: {
                    title: 'svkleinsendelbach.de',
                    link: 'https://www.svkleinsendelbach.de'
                }
            },
            {
                imageSrc: 'https://svkleinsendelbach-website.web.app/assets/images/facebook-logo.png',
                name: 'Facebook',
                title: 'SV Kleinsendelbach e.V.',
                link: {
                    title: 'facebook.com/svkleinsendelbach',
                    link: 'https://www.facebook.com/svkleinsendelbach'
                }
            },
            {
                imageSrc: 'https://svkleinsendelbach-website.web.app/assets/images/discord-logo.png',
                name: 'Discord',
                title: 'SV Kleinsendelbach e.V.',
                link: {
                    title: 'discord.gg/gpJMrajz7q',
                    link: 'https://www.discord.gg/gpJMrajz7q'
                }
            },
            {
                imageSrc: 'https://svkleinsendelbach-website.web.app/assets/images/instagram-logo.png',
                name: 'Instagram',
                title: 'SG Kleinsendelbach / Hetzles',
                link: {
                    title: 'instagram.com/svkleinsendelbach',
                    link: 'https://www.instagram.com/svkleinsendelbach'
                }
            },
            {
                imageSrc: 'https://svkleinsendelbach-website.web.app/assets/images/sg-logo.png',
                name: 'Website der SG',
                title: 'SG Kleinsendelbach / Hetzles',
                link: {
                    title: 'sg-kh.de',
                    link: 'https://www.sg-kh.de'
                }
            }
        ],
        sponsors: sponsorsData
    }
}
