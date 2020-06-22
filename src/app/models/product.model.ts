
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
            this.imgLink = imgLink;
            this.title = title;
            this.description = description;
            this.price = price;
            this.inStock = inStock;
    }
}