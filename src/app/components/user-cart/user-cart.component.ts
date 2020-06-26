import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger/messenger.service';
import { UserCartService } from 'src/app/services//user-cart/user-cart.service';
import { UserCart } from 'src/app/models/user-cart.model';
import { ProductItem } from 'src/app/models/product.model';
import { LoginService } from 'src/app/services/login/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {

  userCartItems = [];

  loginStatus$ : Observable<boolean>;

  cartTotal = 0;

  constructor(private msg: MessengerService, private userCartService: UserCartService, private loginService: LoginService ) { }

  ngOnInit(): void {
    this.loginStatus$ = this.loginService.isLoggedIn;
    this.handleSubscription();
    this.loadCartItems();
  }

  loadCartItems() {
    this.userCartService.getCartItems().subscribe((items: UserCart[]) => {
      this.userCartItems = items;
      this.calculateCartTotal();
    })
  }


  handleSubscription() {
    this.msg.getMsg().subscribe((product: ProductItem) => {
      this.loadCartItems();
    });
  }

  addProductToCart(product: ProductItem) {

    let productExists = false;

    for (let i in this.userCartItems) {
      if(this.userCartItems[i].productID === product.productID) {
        this.userCartItems[i].quantity++
        productExists = true
        break;
    }
  }
    if(!productExists && product.inStock) {
      
      this.userCartItems.push({
        userCartID: product.productID,
        productName: product.title,
        productPrice: product.price,
        quantity: 1
      })
    }
    
    this.calculateCartTotal();
  }

  calculateCartTotal() {
    this.cartTotal = 0;
    this.userCartItems.forEach(item => {
      this.cartTotal += (item.quantity * item.productPrice)
    })
  }

}
