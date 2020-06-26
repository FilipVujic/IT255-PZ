import { ProductItem } from './../../models/product.model';
import { UserCart } from './../../models/user-cart.model';
import { productUrl, userCartUrl, userCartUrlAux, userCartUrlAux2 } from './../../config/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserCartService {


  constructor(private http: HttpClient) { }

  getCartItems(): Observable<UserCart[]> {
    return this.http.get<UserCart[]>(userCartUrlAux2 + "/" + localStorage.getItem("userID"), {headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })}).pipe(
      map((result: any[]) => {
        let userCartList: UserCart[] = [];

        for (let item of result) {
          let productExists = false;

          for (let i in userCartList) {
            if (userCartList[i].productID === item.productID) {
              userCartList[i].quantity++
              productExists = true
              break;
            }
          }
          if (!productExists) {

            userCartList.push(new UserCart(item.userCartID, item.productID, item.productName, item.productPrice, parseInt(localStorage.getItem("userID"))));
          }
        }


        return userCartList;
      })
    );
  }

  addProductToCart(product: ProductItem): Observable<any> {

    let userCart: UserCart;
    userCart = new UserCart(0, product.productID, product.title, product.price, parseInt(localStorage.getItem("userID")));

    return this.http.post(userCartUrl, userCart, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });

  }

  removeProductFromCart(userCartID: number) {

    return this.http.delete(userCartUrl + "/" + userCartID);
  }

  emptyCart(userID: number) {

    return this.http.delete(userCartUrlAux + "/" + userID, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

}
