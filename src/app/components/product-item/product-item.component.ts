import { UserCartService } from './../../services/user-cart.service';
import { CartService } from './../../services/cart.service';
import { ProductItem } from 'src/app/models/product.model';
import { MessengerService } from './../../services/messenger.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: any;

  constructor(private msg: MessengerService, 
    /* private cartService: CartService,  */
    private userCartService: UserCartService
    ) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    this.userCartService.addProductToCart(this.product).subscribe(() => {
      this.msg.sendMsg(this.product)
    })

    /* this.cartService.addProductToCart(this.product).subscribe(() => {
      this.msg.sendMsg(this.product)
    }) */
    
  }

}
