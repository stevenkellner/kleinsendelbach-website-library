import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { ButtonComponent, Link, compactMap } from '../../../../../kleinsendelbach-website-library/src/public-api';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'home-page',
    standalone: true,
    imports: [CommonModule, ButtonComponent],
    templateUrl: './home.page.html',
    styleUrl: './home.page.sass'
})
export class HomePage {

    public routes = compactMap(routes, route => {
        if (!route.component || !route.path || route.path === '*' || route.path === '**')
            return null;
        const name = route.component.name.replaceAll('_', '');
        return {
            link: Link.internal(name, route.path),
            name: name
        };
    }).sort((a, b) => a.name.localeCompare(b.name));
}
