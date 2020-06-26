import { userID } from './../../config/api';
import { UserCartService } from 'src/app/services//user-cart/user-cart.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  model: any = {}

  constructor(private userCartService: UserCartService) { }

  ngOnInit(): void {
  }

  checkout() {

    this.userCartService.emptyCart(userID).subscribe(() => {
      
    });
    
  }

}
