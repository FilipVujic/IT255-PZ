import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-cart-item',
  templateUrl: './user-cart-item.component.html',
  styleUrls: ['./user-cart-item.component.css']
})
export class UserCartItemComponent implements OnInit {

  @Input() userCartItem: any;

  constructor() { }

  ngOnInit(): void {
  }

}
