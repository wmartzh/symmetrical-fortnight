
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class User {
    id: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
    address?: Nullable<string>;
    createdAt: string;
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;

    abstract user(id?: Nullable<string>, email?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createUser(name: string, lastName: string, email: string, password: string, address?: Nullable<string>): User | Promise<User>;

    abstract updateUser(id: string, name?: Nullable<string>, lastName?: Nullable<string>, email?: Nullable<string>, password?: Nullable<string>, address?: Nullable<string>): User | Promise<User>;

    abstract deleteUser(id: string): Nullable<string> | Promise<Nullable<string>>;
}

type Nullable<T> = T | null;
