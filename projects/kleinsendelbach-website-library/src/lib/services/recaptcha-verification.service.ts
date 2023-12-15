import { Injectable } from '@angular/core';
import { Result } from '../types';

export type RecaptchaResponse = {
    success: boolean;
    score: number;
    action: string;
    challenge_ts: string;
    hostname: string;
    errorCodes: string[] | null;
}

@Injectable({
    providedIn: 'root'
})
export class RecaptchaVerificationService {

    private verifyRecaptcha: ((token: string) => Promise<Result<RecaptchaResponse>>) | null = null;

    public setup(verifyRecaptcha: (token: string) => Promise<Result<RecaptchaResponse>>) {
        if (this.verifyRecaptcha)
            throw new Error('Recaptcha service is already set up.');
        this.verifyRecaptcha = verifyRecaptcha;
    }

    public async verify(token: string): Promise<Result<RecaptchaResponse>> {
        if (!this.verifyRecaptcha)
            throw new Error('Recaptcha service not set up, but verification is requested.');
        return await this.verifyRecaptcha(token);
    }
}
