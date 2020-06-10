import { ProductItem } from './../components/product-item/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: ProductItem[] = [
    new ProductItem(1, 'https://www.cortguitars.com/_DATA/item/75/CR100CRSmain.png', 'Guitar 1', 'Simple guitar', 600, true),
    new ProductItem(2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcOH6DcW9gkNSFiYTY4Drf50tGHo-HPUWgtTwAkSa4BKuMJ23E&usqp=CAU', 'Guitar 2', 'Simple guitar', 800, true),
    new ProductItem(3, 'https://images-na.ssl-images-amazon.com/images/I/310aabnm-kL._SX425_.jpg', 'Guitar 3', 'Simple guitar', 200, true),
    new ProductItem(4, 'https://www.cortguitars.com/_DATA/item/75/CR100CRSmain.png', 'Guitar 1', 'Simple guitar', 1300, true),
    new ProductItem(5, 'https://www.cortguitars.com/_DATA/item/75/CR100CRSmain.png', 'Guitar 1', 'Simple guitar', 2000, false),
    new ProductItem(6, 'https://www.cortguitars.com/_DATA/item/75/CR100CRSmain.png', 'Guitar 1', 'Simple guitar', 500, true)
  ]

  constructor() { }

  getProducts(): ProductItem[] {
    
    return this.products;
  }
}
