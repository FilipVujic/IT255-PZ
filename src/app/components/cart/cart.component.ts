import { CartItem } from './../../models/cart-item.model';
import { CartService } from './../../services/cart.service';
import { ProductItem } from 'src/app/models/product.model';
import { MessengerService } from 'src/app/services/messenger.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  cartItems = [];

  cartTotal = 0;

  constructor(private msg: MessengerService, private cartService: CartService) { }

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      console.log(items);
      this.cartItems = items;
    })
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: ProductItem) => {
      this.loadCartItems();
    });
  }

  addProductToCart(product: ProductItem) {

    let productExists = false;

    for (let i in this.cartItems) {
      console.log(this.cartItems[i].id)
      if(this.cartItems[i].id === product.productID) {
        this.cartItems[i].qty++
        productExists = true
        break;
    }
  }
    if(!productExists && product.inStock === true) {
      this.cartItems.push({
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
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }
}
