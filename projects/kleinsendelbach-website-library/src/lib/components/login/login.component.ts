import { RecaptchaService } from './../../services/recaptcha.service';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { InputFormComponent } from '../input-form/input-form.component';
import { TextInputComponent } from '../input-form/input-fields/text/text.component';
import { SignInWithButtonComponent } from '../sign-in-with-button/sign-in-with-button.component';
import { InputError, InputField, InputForm, Validator } from '../../types';
import { AuthenticationService, DeviceTypeService } from '../../services';
import { ErrorMessageComponent } from '../input-form/error-message/error-message.component';

@Component({
    selector: 'login',
    standalone: true,
    imports: [CommonModule, InputFormComponent, TextInputComponent, SignInWithButtonComponent, ErrorMessageComponent],
    templateUrl: './login.component.html',
    styleUrl: './login.component.sass'
})
export class LoginComponent {

    @Output('login') public onLoginRegistrationState = new EventEmitter<'registered' | 'unregistered'>();

    public signInWithAppleStatus: 'loading' | 'valid' | 'failed' = 'valid';

    public signInWithGoogleStatus: 'loading' | 'valid' | 'failed' = 'valid';

    public inputForm = new InputForm({
        email: new InputField<string>('', [
            Validator.required('Die E-Mail Addresse ist erforderlich.'),
            Validator.email('Das ist keine gültige E-Mail Addresse.')
        ]),
        password: new InputField<string>('', [
            Validator.required('Das Passwort ist erforderlich.'),
            Validator.minLength(8, 'Das Passwort muss mindestens 8 Zeichen lang sein.'),
            Validator.containsAnInteger('Das Passwort muss eine Zahl enthalten.'),
            Validator.containsALowercasedCharacter('Das Passwort muss einen Kleinbuchstaben enthalten.'),
            Validator.containsAnUppercasedCharacter('Das Passwort muss einen Großbuchstaben enthalten.')
        ])
    },
    {
        invalidInput: new InputError('Nicht alle Eingaben sind gültig.'),
        recaptchaFailed: new InputError('reCaptcha failed.'),
        failed: new InputError('Anmeldung ist fehlgeschlagen.'),
        loading: new InputError('Anmeldung wird geprüft.', 'info')
    });

    constructor(
        public readonly deviceType: DeviceTypeService,
        private readonly authenticationService: AuthenticationService<never>,
        private readonly recaptchaService: RecaptchaService
    ) {}

    public get signInWithAppleError(): InputError | null {
        return this.signInWithError(this.signInWithAppleStatus);
    }

    public get signInWithGoogleError(): InputError | null {
        return this.signInWithError(this.signInWithGoogleStatus);
    }

    private signInWithError(status: 'loading' | 'valid' | 'failed'): InputError | null {
        switch (status) {
        case 'loading':
            return new InputError('Bitte melden Sie sich im seperaten Anmeldefenster an.', 'info');
        case 'valid':
            return null;
        case 'failed':
            return new InputError('Anmeldung ist fehlgeschlagen.');
        }
    }

    private setState(loading: 'email' | 'apple' | 'google' | null = null) {
        this.inputForm.status = loading === 'email' ? 'loading' : 'valid';
        this.signInWithAppleStatus = loading === 'apple' ? 'loading' : 'valid';
        this.signInWithGoogleStatus = loading === 'google' ? 'loading' : 'valid';
    }

    public async loginWithEmail() {
        if (this.inputForm.evaluate() === 'invalid')
            return;
        this.setState('email');
        if (await this.recaptchaService.verify('login_page') === 'invalid') {
            this.inputForm.status = 'recaptchaFailed';
            return;
        }
        try {
            const registrationState = await this.authenticationService.login({
                email: this.inputForm.field('email').value,
                password: this.inputForm.field('password').value
            });
            await this.handleRegistrationState(registrationState);
        } catch {
            this.inputForm.status = 'failed';
        }
    }

    public async loginWithApple() {
        this.setState('apple');
        this.inputForm.reset();
        try {
            const registrationState = await this.authenticationService.login('apple');
            await this.handleRegistrationState(registrationState);
        } catch {
            this.signInWithAppleStatus = 'failed';
        }
    }

    public async loginWithGoogle() {
        this.setState('google');
        this.inputForm.reset();
        try {
            const registrationState = await this.authenticationService.login('google');
            await this.handleRegistrationState(registrationState);
        } catch {
            this.signInWithGoogleStatus = 'failed';
        }
    }

    private async handleRegistrationState(registrationState: 'registered' | 'unregistered') {
        this.setState();
        this.inputForm.reset();
        this.onLoginRegistrationState.emit(registrationState);
    }
}
