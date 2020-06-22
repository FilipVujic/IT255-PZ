import { userID } from './../config/api';
export class UserCart {

    userCartID: number;
    productID: number;
    productName: string;
    productPrice: number;
    quantity: number;
    userID: number;

    constructor(productID: number, productName: string, productPrice: number) {
        this.userCartID = 0;
        this.productID = productID;
        this.productName = productName;
        this.productPrice = productPrice;
        this.quantity = 1;
        this.userID = userID;
    }
}