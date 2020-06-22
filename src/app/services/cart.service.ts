import { ProductItem } from 'src/app/models/product.model';
import { CartItem } from './../models/cart-item.model';
import { cartUrl, productUrl } from './../config/api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result: any[]) => {
        let cartItems: CartItem[] = [];

        for (let item of result) {
          let productExists = false;

          for (let i in cartItems) {
            console.log(cartItems[i].productID)
            if(cartItems[i].productID === item.productID) {
              cartItems[i].quantity++
              productExists = true
              break;
          }
        }
          if(!productExists) {
            console.log(item);
            cartItems.push(new CartItem(1, item.productID, 1));
          }
      }

        return cartItems;
      })
    );
  }

  addProductToCart(product: ProductItem): Observable<any> {
    let c: CartItem;
    c = new CartItem(1, product.productID, 1);
    return this.http.post(cartUrl, { c });
  }
}
