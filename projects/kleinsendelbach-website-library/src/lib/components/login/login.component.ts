import { RecaptchaService } from './../../services/recaptcha.service';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { InputFormComponent } from '../input-form/input-form.component';
import { TextInputComponent } from '../input-form/input-fields/text/text.component';
import { SignInWithButtonComponent } from '../sign-in-with-button/sign-in-with-button.component';
import { InputError, InputField, InputForm, Result, Validator } from '../../types';
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

    public signInWithAppleState: 'loading' | 'success' | 'failed' | null = null;

    public signInWithGoogleState: 'loading' | 'success' | 'failed' | null = null;

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
        recaptchaFailed: 'Ungültige reCAPTCHA. Bitte versuchen Sie es erneut.'
    });

    constructor(
        public readonly deviceType: DeviceTypeService,
        private readonly authenticationService: AuthenticationService<never>,
        private readonly recaptchaService: RecaptchaService
    ) {}

    public get signInWithAppleError(): InputError | null {
        return this.signInWithError(this.signInWithAppleState);
    }

    public get signInWithGoogleError(): InputError | null {
        return this.signInWithError(this.signInWithGoogleState);
    }

    private signInWithError(state: 'loading' | 'success' | 'failed' | null): InputError | null {
        if (state === null)
            return null;
        switch (state) {
        case 'loading':
            return new InputError('Bitte melden Sie sich im seperaten Anmeldefenster an.', 'info');
        case 'success':
            return new InputError('Die Anmeldung war erfolgreich. Sie werden automatisch weitergeleitet.', 'success');
        case 'failed':
            return new InputError('Die Anmeldung ist fehlgeschlagen. Bitte versuchen Sie es erneut.');
        }
    }

    private setLoadingState(type: 'email' | 'apple' | 'google') {
        this.inputForm.setState(type === 'email' ? 'loading' : 'valid');
        this.signInWithAppleState = type === 'apple' ? 'loading' : null;
        this.signInWithGoogleState = type === 'google' ? 'loading' : null;
        if (type === 'apple' || type === 'google')
            this.inputForm.reset();
    }

    public async loginWithEmail() {
        if (this.inputForm.evaluate() === 'invalid')
            return;
        this.setLoadingState('email');
        if (await this.recaptchaService.verify('login_page') === 'invalid')
            return this.inputForm.setState('recaptchaFailed');
        const registrationStateResult = await this.authenticationService.login({
            email: this.inputForm.field('email').value,
            password: this.inputForm.field('password').value
        });
        this.inputForm.finish(registrationStateResult);
        await this.handleRegistrationState(registrationStateResult);
    }

    public async loginWithApple() {
        this.setLoadingState('apple');
        const registrationStateResult = await this.authenticationService.login('apple');
        this.signInWithAppleState = registrationStateResult.isSuccess() ? 'success' : 'failed';
        await this.handleRegistrationState(registrationStateResult);
    }

    public async loginWithGoogle() {
        this.setLoadingState('google');
        const registrationStateResult = await this.authenticationService.login('google');
        this.signInWithGoogleState = registrationStateResult.isSuccess() ? 'success' : 'failed';
        await this.handleRegistrationState(registrationStateResult);
    }

    private async handleRegistrationState(registrationStateResult: Result<'registered' | 'unregistered'>) {
        if (registrationStateResult.isFailure())
            return;
        this.inputForm.reset();
        this.onLoginRegistrationState.emit(registrationStateResult.value);
    }
}
