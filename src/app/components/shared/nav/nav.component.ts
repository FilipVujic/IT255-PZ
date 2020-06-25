import { Observable } from 'rxjs';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

    this.loginStatus$ = this.loginService.isLoggedIn;

    this.UserName$ = this.loginService.currentUserName;
  }

  loginStatus$ : Observable<boolean>;

  UserName$ : Observable<string>;

  onLogout() {
    this.loginService.logout();
  }

}
