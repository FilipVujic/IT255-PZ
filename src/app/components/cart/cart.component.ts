import { ProductItem } from './../product-item/product.model';
import { MessengerService } from 'src/app/services/messenger.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  cartItems = [
    /* {title: "Item 1", price: 300, qty: 1},
    {title: "Item 2", price: 400, qty: 3},
    {title: "Item 3", price: 200, qty: 2} */
  ];

  cartTotal = 0;

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product: ProductItem) => {
      this.addProductToCart(product);
    });

    
  }
  addProductToCart(product: ProductItem) {

    let productExists = false;

    for (let i in this.cartItems) {
      console.log(this.cartItems[i].id)
      if(this.cartItems[i].id === product.id) {
        this.cartItems[i].qty++
        productExists = true
        break;
    }
  }
    if(!productExists) {
      this.cartItems.push({
        id: product.id,
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
  

    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }
}
