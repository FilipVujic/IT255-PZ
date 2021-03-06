import { catchError } from 'rxjs/operators';

export class ProductItem {

    productID: number;
    title: string;
    imgLink: string;
    description: string;
    price: number;
    inStock: boolean;
    tags: string;
    category: string;


    constructor(id: number, title: string, imgLink: string, description: string, price: number, inStock: boolean, tags: string, 
        category: string) {
            this.productID = id;
            this.title = title;
            this.imgLink = imgLink;
            this.description = description;
            this.price = price;
            this.inStock = inStock;
            this.tags = tags;
            this.category = category;
    }
}