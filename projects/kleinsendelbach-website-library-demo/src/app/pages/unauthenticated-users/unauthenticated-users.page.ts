import { Component } from '@angular/core';
import { UnauthenticatedUsersComponent, User } from 'kleinsendelbach-website-library';

@Component({
    selector: 'unauthenticated-users-page',
    standalone: true,
    imports: [UnauthenticatedUsersComponent],
    templateUrl: './unauthenticated-users.page.html',
    styleUrl: './unauthenticated-users.page.sass'
})
export class UnauthenticatedUsersPage {

    public unauthenticatedUsers: User<never>[] = [
        {
            firstName: 'first 1',
            lastName: 'last 1',
            hashedUserId: 'id-1',
            roles: 'unauthenticated'
        },
        {
            firstName: 'first 2',
            lastName: 'last 2',
            hashedUserId: 'id-2',
            roles: 'unauthenticated'
        },
        {
            firstName: 'first 3',
            lastName: 'last 3',
            hashedUserId: 'id-3',
            roles: 'unauthenticated'
        },
        {
            firstName: 'first 4',
            lastName: 'last 4',
            hashedUserId: 'id-4',
            roles: 'unauthenticated'
        },
        {
            firstName: 'first 5',
            lastName: 'last 5',
            hashedUserId: 'id-5',
            roles: 'unauthenticated'
        }
    ];
}
