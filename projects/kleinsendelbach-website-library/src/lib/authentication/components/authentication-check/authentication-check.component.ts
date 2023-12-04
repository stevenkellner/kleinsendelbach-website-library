import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../../services';
import { AuthenticationState, AuthenticationStates } from '../../types';

@Component({
    selector: 'authentication-check',
    templateUrl: './authentication-check.component.html',
    styleUrls: ['./authentication-check.component.sass']
})
export class AuthenticationCheckComponent {

    @Input() public roles!: string[];

    @Input() public authenticationStates: AuthenticationStates = new AuthenticationStates(['default']);

    @Input() public key: string = 'default';

    @Output() public onAuthentication = new EventEmitter<void>();

    constructor(
        private readonly authService: AuthService
    ) {}

    public get state(): AuthenticationState | null {
        return this.authenticationStates.visisbleState(this.key);
    }

    public async ngOnInit() {
        try {
            const hasRoles = await this.authService.hasRoles(this.roles);
            if (hasRoles) {
                this.authenticationStates.setState(this.key, 'authenticated');
                this.onAuthentication.emit();
            } else
                this.authenticationStates.setState(this.key, 'unauthenticated');
        } catch {
            this.authenticationStates.setState(this.key, 'internalError');
        }
    }
}
