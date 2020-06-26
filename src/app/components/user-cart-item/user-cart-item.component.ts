import { UserCartService } from 'src/app/services//user-cart/user-cart.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-user-cart-item',
  templateUrl: './user-cart-item.component.html',
  styleUrls: ['./user-cart-item.component.css']
})
export class UserCartItemComponent implements OnInit {

  @Input() userCartItem: any;
  @Output() loadCartItems: EventEmitter<any> = new EventEmitter();

  constructor(private userCartService: UserCartService) { }

  ngOnInit(): void {
  }

  removeProduct() {

    this.userCartService.removeProductFromCart(this.userCartItem.userCartID).subscribe(() => {
      this.loadCartItems.emit();
    });
    
  }


}
