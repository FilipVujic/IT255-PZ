import { UserCart } from './../models/user-cart.model';
import { Cart } from './../models/cart.model';
import { ProductItem } from 'src/app/models/product.model';
import { CartItem } from './../models/cart-item.model';
import { cartUrl, productUrl, cartItemUrl, userID, userCartUrl } from './../config/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserCartService {


  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(cartItemUrl).pipe(
      map((result: any[]) => {
        let cartItems: CartItem[] = [];

        for (let item of result) {
          let productExists = false;

          for (let i in cartItems) {

            if(cartItems[i].productID === item.productID) {
              cartItems[i].quantity++
              productExists = true
              break;
          }
        }
          if(!productExists) {

            cartItems.push(new CartItem(1, item.productID, 1));
          }
      }

        return cartItems;
      })
    );
  }

  addProductToCart(product: ProductItem): Observable<any> {

    let userCart: UserCart;
    userCart = new UserCart(product.productID, product.title, product.price);    
    console.log(userCart);
    console.log(userCartUrl);

    /* let cartItem: CartItem;
    cartItem = new CartItem(1, product.productID, 1);
    console.log(cartItem); */
    /* return this.http.post(cartItemUrl, { cartItem: CartItem }); 
    this.http.post(userCartUrl, { userCart: UserCart });
    */

/*     console.log(userCart.productID);
    console.log(userCart.productName);
    console.log(userCart.productPrice);
    console.log(userCart.quantity);
    console.log(userCart.userCartID);
    console.log(userCart.userID); */

    return this.http.post(userCartUrl, userCart, { headers: new HttpHeaders ({
      'Content-Type': 'application/json'
    }) 
  });

  }
}
