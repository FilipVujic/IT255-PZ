import { ProductItem } from 'src/app/models/product.model';
import { ProductService } from './../../services/product/product.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() searchText: string;
  productList: ProductItem[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    }) 
  }

}
