import { AngularFireAuth } from '@angular/fire/compat/auth';
import { OAuthProvider } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { CookieService } from 'ngx-cookie-service';
import { CrypterService } from './crypter.service';
import { Result, includesAll } from '../types';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService<Role extends string> {

    private getUserRoles: (() => Promise<Role[] | null>) | null = null;

    constructor(
        private readonly firebaseAuth: AngularFireAuth,
        private readonly cookieService: CookieService,
        private readonly crypter: CrypterService
    ) {}

    public setup(getUserRoles: () => Promise<Role[] | null>) {
        if (this.getUserRoles)
            throw new Error('Auth service is already set up.');
        this.getUserRoles = getUserRoles;
    }

    private async loginFirebase(method: 'google' | 'apple' | { email: string; password: string }): Promise<Result<firebase.User>> {
        let credential: firebase.auth.UserCredential & { user: firebase.User | null | undefined };
        try {
            if (method === 'google' || method === 'apple') {
                const provider = method === 'google' ? new firebase.auth.GoogleAuthProvider() : new OAuthProvider('apple.com');
                credential = await this.firebaseAuth.signInWithPopup(provider);
            } else {
                credential = await this.firebaseAuth.signInWithEmailAndPassword(method.email, method.password).catch(async (error: unknown) => {
                    if (typeof error === 'object' && error !== null && 'code' in error && error.code === 'auth/user-not-found')
                        return this.firebaseAuth.createUserWithEmailAndPassword(method.email, method.password);
                    throw error;
                });
            }
            if (credential.user === null || credential.user === undefined)
                return Result.failure(new Error('Login failed, no user in credential.'));
            return Result.success(credential.user);
        } catch (error) {
            return Result.failure(error);
        }
    }

    private async logoutFirebase() {
        await this.firebaseAuth.signOut();
    }

    private async getAndStoreUserRoles(): Promise<Role[] | null> {
        if (!this.getUserRoles)
            throw new Error('Auth service not set up, but getUserRoles is needed.');
        const roles = await this.getUserRoles();
        if (roles === null)
            this.cookieService.delete('user-roles');
        else
            this.cookieService.set('user-roles', this.crypter.encodeEncrypt(roles));
        return roles;
    }

    public async login(method: 'google' | 'apple' | { email: string; password: string }): Promise<Result<'registered' | 'unregistered'>> {
        this.cookieService.delete('user-roles');
        const result = await this.loginFirebase(method);
        if (result.isFailure())
            return result;
        return Result.failure(await this.getAndStoreUserRoles() === null ? 'unregistered' : 'registered');
    }

    public async logout() {
        this.cookieService.delete('user-roles');
        await this.logoutFirebase();
    }

    public isLoggedIn(): boolean {
        return this.cookieService.check('user-roles');
    }

    public async checkRoles(roles: Role[]): Promise<boolean> {
        if (this.cookieService.check('user-roles')) {
            const storedRoles: Role[] = this.crypter.decryptDecode(this.cookieService.get('user-roles'));
            if (includesAll(storedRoles, roles))
                return true;
        }
        const myRoles = await this.getAndStoreUserRoles();
        if (myRoles === null)
            return false;
        return includesAll(myRoles, roles);
    }
}
