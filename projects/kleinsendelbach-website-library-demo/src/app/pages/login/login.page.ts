import { Component } from '@angular/core';
import { LoginComponent } from 'kleinsendelbach-website-library';

@Component({
    selector: 'login-page',
    standalone: true,
    imports: [LoginComponent],
    templateUrl: './login.page.html',
    styleUrl: './login.page.sass'
})
export class LoginPage {

}
