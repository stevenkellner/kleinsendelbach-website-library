import { Component, Output, EventEmitter, Input } from '@angular/core';
import { AppearanceService } from '../../services';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'sign-in-with-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './sign-in-with-button.component.html',
    styleUrl: './sign-in-with-button.component.sass'
})
export class SignInWithButtonComponent {

    @Input({ required: true }) public type!: 'apple' | 'google';

    @Output() public clicked = new EventEmitter<void>();

    constructor(
        public readonly appearance: AppearanceService
    ) {}

    public get buttonText(): string {
        switch (this.type) {
        case 'apple':
            return 'Mit Apple Anmelden'
        case 'google':
            return 'Mit Google Anmelden'
        }
    }

    public get imageSrc(): string {
        switch (this.type) {
        case 'apple':
            if (this.appearance.isLight)
                return 'assets/images/apple-logo-white.png';
            else
                return 'assets/images/apple-logo-black.png';
        case 'google':
            return 'assets/images/google-logo.png'
        }
    }
}
