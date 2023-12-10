import { Component } from '@angular/core';
import { AuthenticationService, AuthenticationCheckComponent, AuthenticationStates, Link } from 'kleinsendelbach-website-library';

@Component({
    selector: 'authentication-page',
    standalone: true,
    imports: [AuthenticationCheckComponent],
    templateUrl: './authentication.page.html',
    styleUrls: ['./authentication.page.sass']
})
export class AuthenticationPage {

    public authenticationStates = new AuthenticationStates(['key-1', 'key-2'])

    public loginLink = Link.external('Anmelden', 'https://google.com')

    constructor(
        private readonly authService: AuthenticationService
    ) {
        this.authService.setup(async roles => roles.includes('valid'), async () => {});
    }
}
