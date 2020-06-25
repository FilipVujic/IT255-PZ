import { ProductItem } from 'src/app/models/product.model';
import { Observable } from 'rxjs';
import { productUrl, userCartUrl } from './../../config/api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductItem[]> {
    
    return this.http.get<ProductItem[]>(productUrl);
  }

  removeProduct(userCartID: number) {

    return this.http.delete(userCartUrl + "/" + userCartID);
    
  }
}
