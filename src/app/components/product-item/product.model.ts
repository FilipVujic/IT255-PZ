
export class ProductItem {

    id: number;
    img_link: string;
    title: string;
    description: string;
    price: number;
    in_stock: boolean;

    constructor(id: number, img_link: string, title: string, description: string, price: number, in_stock: boolean) {
        this.id = id;
        this.img_link = img_link;
        this.title = title;
        this.description = description;
        this.price = price;
        this.in_stock = in_stock;
    }
}