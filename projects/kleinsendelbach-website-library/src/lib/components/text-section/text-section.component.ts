import { CommonModule } from '@angular/common';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { DeviceTypeService } from '../../services';

@Component({
    selector: 'text-section',
    standalone: true,
    imports: [CommonModule, FontAwesomeModule],
    templateUrl: './text-section.component.html',
    styleUrl: './text-section.component.sass'
})
export class TextSectionComponent {

    @Input() public title: string | null = null;

    @Input() public collapsed: boolean | null = null;

    @Output() public collapsedChanged = new EventEmitter<boolean>();

    constructor(
        private readonly faIconLibrary: FaIconLibrary,
        public readonly deviceType: DeviceTypeService
    ) {
        this.faIconLibrary.addIconPacks(fas, far, fab);
    }

    public get titleId(): string | null {
        if (this.title === null)
            return null;
        const validCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-#';
        const replaceCharacters = { Ä: 'AE', Ö: 'OE', Ü: 'UE', ß: 'ss', ä: 'ae', ö: 'oe', ü: 'ue' };
        let titleId = '';
        function addCharacter(character: string) {
            if (character === '-' && (titleId === '' || titleId.endsWith('-')))
                return;
            titleId += character.toLowerCase();
        }
        for (const character of this.title) {
            if (validCharacters.includes(character))
                addCharacter(character);
            else if (character in replaceCharacters)
                addCharacter(replaceCharacters[character as keyof typeof replaceCharacters]);
            else
                addCharacter('-');
        }
        if (titleId.endsWith('-'))
            titleId = titleId.slice(0, titleId.length - 1);
        return titleId;
    }

    public toggleCollapsed() {
        if (this.collapsed === null)
            return;
        this.collapsed = !this.collapsed;
        this.collapsedChanged.emit(this.collapsed);
    }
}
