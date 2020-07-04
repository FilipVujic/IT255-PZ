import { ProductItem } from './../../models/product.model';
import { UserCartService } from 'src/app/services//user-cart/user-cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  productList: ProductItem[] = [];
  public showDeleteProduct: boolean = false;
  public showAddProduct: boolean = false;
  model: any = {}

  constructor(
    private productService: ProductService,
    private userCartService: UserCartService
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  createProduct() {

    let product;
    product = new ProductItem(
      0,
      this.model.title,
      this.model.imgLink,
      this.model.description,
      this.model.price,
      this.model.inStock,
      this.model.tags,
      this.model.category
    );

    this.productService.createProduct(product).subscribe();
  }

  deleteProduct(productID: number) {

    this.productService.removeProduct(productID).subscribe();
    this.userCartService.removeByProductID(productID).subscribe();

    alert("Product deleted!");
    this.loadProducts();

  }

  toggleAddProduct() {
    this.showDeleteProduct = false;
    this.showAddProduct = !this.showAddProduct;
  }

  toggleDeleteProduct() {
    this.showAddProduct = false;
    this.loadProducts();
    this.showDeleteProduct = !this.showDeleteProduct;

  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    })
  }

}
