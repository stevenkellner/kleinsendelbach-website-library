export type User<Role extends string> = {
    firstName: string;
    lastName: string;
    hashedUserId: string;
    roles: Role[] | 'unauthenticated';
};
