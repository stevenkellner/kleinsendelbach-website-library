import { Component } from '@angular/core';
import { AuthService, AuthenticationStates } from 'kleinsendelbach-website-library';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.sass']
})
export class AuthenticationComponent {

    public authenticationStates = new AuthenticationStates(['key-1', 'key-2'])

    constructor(
        private readonly authService: AuthService
    ) {
        this.authService.setup(async roles => roles.includes('valid'), async () => {});
    }
}
