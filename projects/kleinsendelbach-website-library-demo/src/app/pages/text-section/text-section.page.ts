import { Component } from '@angular/core';
import { TextSectionComponent } from 'kleinsendelbach-website-library';

@Component({
    selector: 'text-section-page',
    standalone: true,
    imports: [TextSectionComponent],
    templateUrl: './text-section.page.html',
    styleUrl: './text-section.page.sass'
})
export class TextSectionPage {}
