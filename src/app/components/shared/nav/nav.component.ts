import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  /* @Output() childEvent = new EventEmitter<string>();
  
  onChange(value:string) {
    this.childEvent.emit(value);
  } */

  constructor() {}

  ngOnInit(): void {
    
  }


}
