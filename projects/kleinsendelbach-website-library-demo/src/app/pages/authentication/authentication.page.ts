import { Component } from '@angular/core';
import { AuthenticationService, AuthenticationCheckComponent, AuthenticationStates, Link, EnvironmentService, CryptionKeys, LinkService } from 'kleinsendelbach-website-library';
import { environment } from '../../environment';

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
        public readonly linkService: LinkService<never>,
        private readonly environmentService: EnvironmentService<{ cryptionKeys: CryptionKeys }>,
        private readonly authService: AuthenticationService<'valid' | 'invalid'>
    ) {
        this.linkService.setup({}, 'https://asdf.com');
        this.environmentService.setup(environment);
        this.authService.setup(async () => ['valid']);
    }
}
