import { UserCartService } from 'src/app/services//user-cart/user-cart.service';
import { ProductService } from './../../services/product/product.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserCart } from 'src/app/models/user-cart.model';

@Component({
  selector: 'app-user-cart-item',
  templateUrl: './user-cart-item.component.html',
  styleUrls: ['./user-cart-item.component.css']
})
export class UserCartItemComponent implements OnInit {

  @Input() userCartItem: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  removeProduct() {
    console.log(this.userCartItem.userCartID)
    this.productService.removeProduct(this.userCartItem.userCartID).subscribe();
    
  }

  /* @Output() valueChange = new EventEmitter();
    Counter = 0;
    valueChanged() { // You can give any function name
        
    } */

  
}
