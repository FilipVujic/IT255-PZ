import { userID } from '../config/api';

export class Cart {

    cartID: number;
    userID: number;
    cartItemID: number;

    constructor(id: number, cartItemID: number) {
        this.cartID = id;
        this.userID = userID;
        this.cartItemID = cartItemID;
    }
}