export class User {

    userID: number;
    username: string;
    email: string;
    password: string;
    admin: boolean;

    constructor(userID: number, username: string, email: string, password: string, admin: boolean) {
        this.userID = userID;
        this.username = username;
        this.email = email;
        this.password = password;
        this.admin = admin;
    }

}