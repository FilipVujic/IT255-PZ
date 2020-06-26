import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  model: any = {}

  constructor() { }

  ngOnInit(): void {
  }

  checkout() {

    console.log("Radi")
    
  }

}
