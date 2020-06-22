import { ProductItem } from './product.model';
export class CartItem {

    cartID: number;
    productID: number;
    quantity: number;

    constructor(id: number, productID: number, quantity: number) {
        this.cartID = id;
        this.productID = productID;
        this.quantity = quantity;
    }
}