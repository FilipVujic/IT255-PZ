/* import { userID } from './../config/api'; */
export class UserCart {

    userCartID: number;
    productID: number;
    productName: string;
    productPrice: number;
    quantity: number;
    userID: number;

    constructor(userCartID: number, productID: number, productName: string, productPrice: number, userID: number) {
        this.userCartID = userCartID;
        this.productID = productID;
        this.productName = productName;
        this.productPrice = productPrice;
        this.quantity = 1;
        this.userID = userID;
    }
}