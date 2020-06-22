import { ProductItem } from './product.model';
export class CartItem {

    id: number;
    productID: number;
    quantity: number;

    constructor(id: number, product: ProductItem, quantity: number) {
        this.id = id;
        this.productID = product.id;
        this.quantity = quantity;
    }
}