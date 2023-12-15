import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthenticationState, AuthenticationStates, Link } from '../../types';
import { AuthenticationService } from '../../services';
import { CommonModule } from '@angular/common';
import { TextSectionComponent } from '../text-section/text-section.component';
import { ButtonComponent } from '../button/button.component';

@Component({
    selector: 'authentication-check',
    standalone: true,
    imports: [CommonModule, TextSectionComponent, ButtonComponent],
    templateUrl: './authentication-check.component.html',
    styleUrl: './authentication-check.component.sass'
})
export class AuthenticationCheckComponent<Role extends string, InternalPathKey extends string> implements OnInit {

    @Input({ required: true }) public roles!: Role[];

    @Input({ required: true }) public loginLink!: Link | InternalPathKey;

    @Input() public authenticationStates: AuthenticationStates = new AuthenticationStates(['default']);

    @Input() public key: string = 'default';

    @Output() public onAuthentication = new EventEmitter<void>();

    constructor(
        private readonly authenticationService: AuthenticationService<Role>
    ) {}

    public get state(): AuthenticationState | null {
        return this.authenticationStates.visisbleState(this.key);
    }

    public async ngOnInit() {
        try {
            const hasRoles = await this.authenticationService.checkRoles(this.roles);
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
