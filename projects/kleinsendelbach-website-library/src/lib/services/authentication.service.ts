import { AngularFireAuth } from '@angular/fire/compat/auth';
import { OAuthProvider } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { CookieService } from 'ngx-cookie-service';
import { CrypterService } from './crypter.service';
import { includesAll } from '../types';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private checkUserRoles: ((roles: string[]) => Promise<boolean>) | null = null;

    private userRequestAccess: ((firstName: string, lastName: string) => Promise<void>) | null = null;

    constructor(
        private readonly firebaseAuth: AngularFireAuth,
        private readonly cookieService: CookieService,
        private readonly crypter: CrypterService
    ) {}

    public setup(checkUserRoles: (roles: string[]) => Promise<boolean>, userRequestAccess: (firstName: string, lastName: string) => Promise<void>) {
        if (this.checkUserRoles && this.userRequestAccess)
            throw new Error('Auth service is already set up.');
        this.checkUserRoles = checkUserRoles;
        this.userRequestAccess = userRequestAccess;
    }

    public async logIn(method: 'google' | 'apple' | { email: string; password: string }): Promise<'registered' | 'unregistered'> {
        let credential: firebase.auth.UserCredential;
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
        if (credential.user === null || credential.user as firebase.User | undefined === undefined)
            throw new Error('Login failed, no user in credential.');
        const authenticated = await this.checkRoles([]);
        return authenticated === 'authenticated' ? 'registered' : 'unregistered';
    }

    public async logOut() {
        this.cookieService.delete('user-roles');
        await this.firebaseAuth.signOut();
    }

    public async isLoggedIn(): Promise<boolean> {
        return await this.firebaseAuth.currentUser !== null;
    }

    public async hasRoles(expectedRoles: string[]): Promise<boolean> {
        if (expectedRoles.length === 0)
            return true;
        if (this.cookieService.check('user-roles')) {
            const storedRoles: string[] = this.crypter.decryptDecode(this.cookieService.get('user-roles'));
            if (includesAll(storedRoles, expectedRoles))
                return true;
        }
        return await this.checkRoles(expectedRoles) === 'authenticated';
    }

    private async checkRoles(expectedRoles: string[]): Promise<'authenticated' | 'unauthenticated'> {
        if (!this.checkUserRoles)
            throw new Error('Auth service not set up, but the check user roles is requested.');
        const hasRoles = await this.checkUserRoles(expectedRoles);
        if (hasRoles && expectedRoles.length !== 0)
            this.cookieService.set('user-roles', this.crypter.encodeEncrypt(expectedRoles));
        else
            this.cookieService.delete('user-roles');
        return hasRoles ? 'authenticated' : 'unauthenticated';
    }

    public async requestAccess(firstName: string, lastName: string) {
        if (!this.userRequestAccess)
            throw new Error('Auth service not set up, but the user request access is requested.');
        if (!await this.firebaseAuth.currentUser)
            return;
        await this.userRequestAccess(firstName, lastName);
    }
}
