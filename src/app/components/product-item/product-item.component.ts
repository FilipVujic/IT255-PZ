import { ProductItem } from './product.model';
import { MessengerService } from './../../services/messenger.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: any;

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    this.msg.sendMsg(this.product)
  }

}
