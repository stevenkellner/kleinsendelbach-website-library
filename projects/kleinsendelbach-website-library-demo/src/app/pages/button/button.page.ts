import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from 'kleinsendelbach-website-library';

type Options = 'borderless' | 'smallText' | 'largeText' | 'prominent' | 'lowPorminent' | 'selected' | 'disabled' | 'unchangeable' | 'plain-style';

@Component({
    selector: 'button-page',
    standalone: true,
    imports: [CommonModule, ButtonComponent],
    templateUrl: './button.page.html',
    styleUrl: './button.page.sass'
})
export class ButtonPage {

    private readonly allOptions: Options[] = ['borderless', 'smallText', 'largeText', 'prominent', 'lowPorminent', 'selected', 'disabled', 'unchangeable', 'plain-style'] ;

    private createNext(current: Options[][], options: Options[]): Options[][] {
        if (options.length === 0)
            return current;
        return this.createNext([...current, ...current.map(button => [...button, options[0]])], options.slice(1));
    }

    public get buttons(): Options[][] {
        return this.createNext([[]], this.allOptions);
    }
}
