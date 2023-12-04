import { Component, Input } from '@angular/core';
import { Result } from '../../types';

@Component({
    selector: 'result-display',
    templateUrl: './result-display.component.html',
    styleUrls: ['./result-display.component.sass']
})
export class ResultDisplayComponent {

    @Input() public result!: Result<any> | null;

    @Input() public showError: boolean = false;

    public get errorMessage(): string {
        if (!this.showError || !this.result || !this.result.isFailure() || typeof this.result.error !== 'string')
            return 'Inhalt konnte nicht geladen werden';
        return this.result.error;
    }
}
