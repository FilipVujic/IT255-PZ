import { ProductService } from './../../services/product/product.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


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

  @Output() loadCartItems: EventEmitter<any> = new EventEmitter();

  removeProduct() {
    console.log(this.userCartItem.userCartID)
    this.productService.removeProduct(this.userCartItem.userCartID).subscribe(() => {
      this.loadCartItems.emit();
    });
    
  }

}
