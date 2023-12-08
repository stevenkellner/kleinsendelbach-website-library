import { Component } from '@angular/core';
import { TextSectionModule } from 'kleinsendelbach-website-library';

@Component({
    selector: 'text-section-page',
    standalone: true,
    imports: [TextSectionModule],
    templateUrl: './text-section.page.html',
    styleUrl: './text-section.page.sass'
})
export class TextSectionPage {}
