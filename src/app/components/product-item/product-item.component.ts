import { UserCartService } from './../../services/user-cart/user-cart.service';
import { MessengerService } from './../../services/messenger/messenger.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: any;

  constructor(private msg: MessengerService, 
    private userCartService: UserCartService
    ) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    this.userCartService.addProductToCart(this.product).subscribe(() => {
      this.msg.sendMsg(this.product)
    })
    
  }

}
