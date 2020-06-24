import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { UserCartService } from 'src/app/services/user-cart.service';
import { UserCart } from 'src/app/models/user-cart.model';
import { ProductItem } from 'src/app/models/product.model';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {

  userCartItems = [];

  cartTotal = 0;

  constructor(private msg: MessengerService, private userCartService: UserCartService ) { }

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
  }

  loadCartItems() {
    this.userCartService.getCartItems().subscribe((items: UserCart[]) => {

      
      this.userCartItems = items;
      console.log(this.userCartItems);
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
      if(this.userCartItems[i].id === product.productID) {
        this.userCartItems[i].qty++
        productExists = true
        break;
    }
  }
    if(!productExists && product.inStock === true) {
      this.userCartItems.push({
        id: product.productID,
        title: product.title,
        price: product.price,
        qty: 1
      })
    }

    /* if(this.cartItems.length === 0) {
      this.cartItems.push({
        title: product.title,
        price: product.price,
        qty: 1
      })
    } else {
    for(let i in this.cartItems) {
      if(this.cartItems[i].id === product.id) {
        this.cartItems[i].qty++
        break;
      }
      else {
        this.cartItems.push({
          title: product.title,
          price: product.price,
          qty: 1
        })
      }
    } */
    this.calculateCartTotal();
  }

  calculateCartTotal() {
    this.cartTotal = 0;
    this.userCartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }
}