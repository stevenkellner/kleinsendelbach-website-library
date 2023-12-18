import { Component, Input } from '@angular/core';
import { Result } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'result-display',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './result-display.component.html',
    styleUrl: './result-display.component.sass'
})
export class ResultDisplayComponent {

    @Input({ required: true }) public result!: Result<any> | null;

    @Input() public showError: boolean = false;

    @Input() public showEmptyListError: boolean = false;

    public get errorMessage(): string {
        if (!this.showError || !this.result || !this.result.isFailure() || typeof this.result.error !== 'string')
            return 'Inhalt konnte nicht geladen werden';
        return this.result.error;
    }

    public get isEmptyList(): boolean {
        if (!this.showEmptyListError || !this.result || this.result.isFailure())
            return false;
        return Array.isArray(this.result.value) && this.result.value.length === 0;
    }
}
