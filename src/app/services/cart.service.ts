import { cartUrl } from './../config/api';
import { ProductItem } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
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
            if(cartItems[i].productID === item.product.id) {
              cartItems[i].quantity++
              productExists = true
              break;
          }
        }
          if(!productExists) {
            cartItems.push(new CartItem(item.id, item.product, 1));
          }
      }

        return cartItems;
      })
    );
  }

  addProductToCart(product: ProductItem): Observable<any> {
    return this.http.post(cartUrl, { product });
  }
}
