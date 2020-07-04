import { ProductItem } from 'src/app/models/product.model';
import { Observable } from 'rxjs';
import { productUrl } from './../../config/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductItem[]> {
    
    return this.http.get<ProductItem[]>(productUrl);
  }

  removeProduct(productID: number) {

    return this.http.delete(productUrl + "/" + productID);
  }

  createProduct(product: ProductItem) {

    console.log(product);

    return this.http.post(productUrl, product, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

}
