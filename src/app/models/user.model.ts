import { userID } from './../config/api';
export class User {

    userID: number;
    username: string;
    email: string;
    password: number;
    admin: boolean;

    constructor(username: string, email: string, password: number) {
        this.userID = 0;
        this.username = username;
        this.email = email;
        this.password = password;
        this.admin = false;
    }
}