import { Component } from '@angular/core';
import { SquadComponent, SquadData } from 'kleinsendelbach-website-library';

@Component({
    selector: 'squad-page',
    standalone: true,
    imports: [SquadComponent],
    templateUrl: './squad.page.html',
    styleUrls: ['./squad.page.sass']
})
export class SquadPage {

    public squadData: SquadData = [
        {
            title: 'Trainer',
            persons: [
                {
                    name: 'Johannes Moritz',
                    imageSrc: 'http://www.anpfiff.info/upload/images/Portrait4/664761.jpg',
                    additionalText: null
                }
            ]
        },
        {
            title: 'Torwart',
            persons: [
                {
                    name: 'Maximilian Hollmig',
                    imageSrc: 'http://www.anpfiff.info/upload/images/Portrait4/665052.jpg',
                    additionalText: '0 Tore und 0 Assists in 14 Spielen'
                },
                {
                    name: 'Kevin Wagner',
                    imageSrc: null,
                    additionalText: '0 Tore und 0 Assists in 9 Spielen'
                }
            ]
        },
        {
            title: 'Abwehr',
            persons: [
                {
                    name: 'Benedikt Bock',
                    imageSrc: 'http://www.anpfiff.info/upload/images/Portrait4/74764.jpg',
                    additionalText: '0 Tore und 0 Assists in 3 Spielen'
                },
                {
                    name: 'Marcel Böhmer',
                    imageSrc: 'http://www.anpfiff.info/upload/images/Portrait4/476136.jpg',
                    additionalText: '4 Tore und 0 Assists in 24 Spielen'
                },
                {
                    name: 'Florian Frosch',
                    imageSrc: 'http://www.anpfiff.info/upload/images/Portrait4/316493.jpg',
                    additionalText: '0 Tore und 0 Assists in 10 Spielen'
                },
                {
                    name: 'Lukas Hofmann',
                    imageSrc: 'http://www.anpfiff.info/upload/images/Portrait4/439654.jpg',
                    additionalText: '0 Tore und 0 Assists in 2 Spielen'
                },
                {
                    name: 'Matthias Klement',
                    imageSrc: 'http://www.anpfiff.info/upload/images/Portrait4/294494.jpg',
                    additionalText: '0 Tore und 0 Assists in 3 Spielen'
                },
                {
                    name: 'Johannes Mehl',
                    imageSrc: 'http://www.anpfiff.info/upload/images/Portrait4/476134.jpg',
                    additionalText: '0 Tore und 0 Assists in 3 Spielen'
                },
                {
                    name: 'Christian Regenfus',
                    imageSrc: 'http://www.anpfiff.info/upload/images/Portrait4/355261.jpg',
                    additionalText: '0 Tore und 0 Assists in 22 Spielen'
                },
                {
                    name: 'Johannes Regenfus',
                    imageSrc: 'http://www.anpfiff.info/upload/images/Portrait4/476135.jpg',
                    additionalText: '1 Tore und 0 Assists in 7 Spielen'
                },
                {
                    name: 'Marcel Sauer',
                    imageSrc: 'http://www.anpfiff.info/upload/images/Portrait4/355264.jpg',
                    additionalText: '1 Tore und 1 Assists in 23 Spielen'
                },
                {
                    name: 'Tobias Schneider',
                    imageSrc: 'http://www.anpfiff.info/upload/images/Portrait4/355266.jpg',
                    additionalText: '2 Tore und 1 Assists in 9 Spielen'
                }
            ]
        },
        {
            title: 'Stab',
            persons: [
                {
                    name: 'Johannes Moritz',
                    imageSrc: 'http://www.anpfiff.info/upload/images/Portrait4/664761.jpg',
                    additionalText: 'Co-Trainer'
                },
                {
                    name: 'Josef Hoier',
                    imageSrc: null,
                    additionalText: 'Spielleiter(in)'
                },
                {
                    name: 'Benedikt Mehl',
                    imageSrc: 'http://www.anpfiff.info/upload/images/Portrait4/355257.jpg',
                    additionalText: 'Spielleiter(in)'
                },
                {
                    name: 'Georg Gierisch',
                    imageSrc: null,
                    additionalText: 'Betreuer(in)'
                }
            ]
        }
    ];
}
