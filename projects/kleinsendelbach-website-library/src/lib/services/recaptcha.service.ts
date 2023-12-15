import { Injectable } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { firstValueFrom } from 'rxjs';
import { RecaptchaVerificationService } from './recaptcha-verification.service';

@Injectable({
    providedIn: 'root'
})
export class RecaptchaService {

    constructor(
        private readonly recaptchaV3Service: ReCaptchaV3Service,
        private readonly recaptchaVerificationService: RecaptchaVerificationService
    ) {}

    public async verify(action: string): Promise<'valid' | 'invalid'> {
        const token = await firstValueFrom(this.recaptchaV3Service.execute(action));
        const responseResult = await this.recaptchaVerificationService.verify(token);
        if (responseResult.isSuccess() && responseResult.value.success && responseResult.value.action === action)
            return 'valid';
        return 'invalid';
    }
}
