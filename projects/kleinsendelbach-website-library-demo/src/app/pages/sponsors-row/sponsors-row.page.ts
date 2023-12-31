import { Component } from '@angular/core';
import { SponsorsData, SponsorsRowsComponent } from 'kleinsendelbach-website-library';

@Component({
    selector: 'sponsors-row-page',
    standalone: true,
    imports: [SponsorsRowsComponent],
    templateUrl: './sponsors-row.page.html',
    styleUrls: ['./sponsors-row.page.sass']
})
export class SponsorsRowPage {

    public sponsorsData: SponsorsData = {
        main: [
            {
                name: 'BHI Biohealth International GmbH',
                logoSrc: 'https://svkleinsendelbach-website.web.app/assets/images/sponsors/biohealth.jpg',
                address: {
                    streetName: 'Heinrich-Wirth-Straße 13',
                    cityName: '95213 Münchberg'
                },
                contact: {
                    phone: '+49 123 4567890',
                    email: 'example.email@web.de',
                    website: 'google.com',
                    socialMedia: null
                }
            },
            {
                name: 'Iprotex GmbG & Co.KG',
                logoSrc: 'https://svkleinsendelbach-website.web.app/assets/images/sponsors/iprotex.jpg',
                address: {
                    streetName: 'Kirchenlamitzer Straße 115',
                    cityName: '95213 Münchberg'
                },
                contact: {
                    phone: null,
                    email: 'example.email@web.de',
                    website: null,
                    socialMedia: [
                        {
                            name: 'Facebook',
                            link: 'facebook.com'
                        }
                    ]
                }
            },
            {
                name: 'SBS - Sicherheitstechnik GmbH',
                logoSrc: 'https://svkleinsendelbach-website.web.app/assets/images/sponsors/sbs-sicherheitstechnik.jpg',
                address: {
                    streetName: 'Kirchenlamitzer Straße 100',
                    cityName: '95213 Münchberg'
                },
                contact: {
                    phone: '+49 123 4567890',
                    email: null,
                    website: 'google.com',
                    socialMedia: [
                        {
                            name: 'Facebook',
                            link: 'facebook.com'
                        },
                        {
                            name: 'Instagram',
                            link: 'instagram.com'
                        },
                        {
                            name: 'Discord',
                            link: 'discord.com'
                        }
                    ]
                }
            }
        ],
        normal: [
            {
                name: 'HUDSON GmbH',
                logoSrc: 'https://svkleinsendelbach-website.web.app/assets/images/sponsors/hudson.jpg',
                address: {
                    streetName: 'Rezerstraße 33',
                    cityName: '95213 Münchberg'
                },
                contact: {
                    phone: null,
                    email: null,
                    website: null,
                    socialMedia: null
                }
            }
        ],
        small: [
            {
                name: 'Designagentur Kreuzberg',
                logoSrc: 'https://svkleinsendelbach-website.web.app/assets/images/sponsors/designagentur-kreuzberg.jpg',
                address: {
                    streetName: 'Beethovenstraße 4',
                    cityName: '95213 Münchberg'
                },
                contact: {
                    phone: null,
                    email: null,
                    website: null,
                    socialMedia: null
                }
            },
            {
                name: 'Kurt Philipp Bedachungen GmbH',
                logoSrc: 'https://svkleinsendelbach-website.web.app/assets/images/sponsors/philipp-bedachungen.jpg',
                address: {
                    streetName: 'Kulmbacher Straße 49',
                    cityName: '95213 Münchberg'
                },
                contact: {
                    phone: null,
                    email: null,
                    website: 'google.com',
                    socialMedia: [
                        {
                            name: 'Facebook',
                            link: 'facebook.com'
                        }
                    ]
                }
            },
            {
                name: 'Allianz Versicherung Bernd Kimler',
                logoSrc: 'https://svkleinsendelbach-website.web.app/assets/images/sponsors/allianz-bernd-kimler.jpg',
                address: {
                    streetName: 'Bayreuther Straße 1',
                    cityName: '95213 Münchberg'
                },
                contact: {
                    phone: '+49 123 4567890',
                    email: 'example.email@web.de',
                    website: null,
                    socialMedia: null
                }
            },
            {
                name: 'Sparkasse Hochfranken',
                logoSrc: 'https://svkleinsendelbach-website.web.app/assets/images/sponsors/sparkasse-hochfranken.jpg',
                address: {
                    streetName: 'Kirchenlamitzer Straße 6-8',
                    cityName: '95213 Münchberg'
                },
                contact: {
                    phone: '+49 123 4567890',
                    email: null,
                    website: 'google.com',
                    socialMedia: [
                        {
                            name: 'Facebook',
                            link: 'facebook.com'
                        },
                        {
                            name: 'Instagram',
                            link: 'instagram.com'
                        },
                        {
                            name: 'Discord',
                            link: 'discord.com'
                        }
                    ]
                }
            },
            {
                name: 'Stefan Kiessling Elektrotechnik',
                logoSrc: 'https://svkleinsendelbach-website.web.app/assets/images/sponsors/stefan-kiessling-elektrotechnik.jpg',
                address: {
                    streetName: 'Kirchenlamitzer Straße 75',
                    cityName: '95213 Münchberg'
                },
                contact: {
                    phone: '+49 123 4567890',
                    email: 'example.email@web.de',
                    website: 'google.com',
                    socialMedia: null
                }
            },
            {
                name: 'Elektro Wilfert',
                logoSrc: 'https://svkleinsendelbach-website.web.app/assets/images/sponsors/elektro-wilfert.jpg',
                address: {
                    streetName: 'Stammbacher Straße 32',
                    cityName: '95213 Münchberg'
                },
                contact: {
                    phone: '+49 123 4567890',
                    email: 'example.email@web.de',
                    website: 'google.com',
                    socialMedia: null
                }
            },
            {
                name: 'Physioteam Münchberg',
                logoSrc: 'https://svkleinsendelbach-website.web.app/assets/images/sponsors/physioteam-münchberg.jpg',
                address: {
                    streetName: 'Theodor-Heuss-Straße 44',
                    cityName: '95213 Münchberg'
                },
                contact: {
                    phone: '+49 123 4567890',
                    email: 'example.email@web.de',
                    website: 'google.com',
                    socialMedia: null
                }
            },
            {
                name: 'GHW electronic 2000 Vertriebs GmbH',
                logoSrc: 'https://svkleinsendelbach-website.web.app/assets/images/sponsors/ghw-electronic.jpg',
                address: {
                    streetName: 'Bayreuther Straße 24',
                    cityName: '95213 Münchberg'
                },
                contact: {
                    phone: null,
                    email: 'example.email@web.de',
                    website: 'google.com',
                    socialMedia: null
                }
            }
        ]
    };
}
