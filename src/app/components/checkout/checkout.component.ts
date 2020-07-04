/* import { userID } from './../../config/api'; */
import { UserCartService } from 'src/app/services//user-cart/user-cart.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  model: any = {}

  constructor(private userCartService: UserCartService, private router: Router) { }

  ngOnInit(): void {
  }

  checkout() {

    if (localStorage.getItem("isAdmin") == "1") {
      alert("Admin cannot purchase products!")
    }
    else {
      this.userCartService.emptyCart(parseInt(localStorage.getItem("userID"))).subscribe(() => {
        alert("Thank you for your purchase!");
        this.router.navigate(['/shop']).then(() => {
          window.location.reload();
        });
      });
    }

    
    
  }

}
