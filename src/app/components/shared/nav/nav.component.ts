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

    /* sessionStorage.setItem("username", localStorage.getItem("username"));
    sessionStorage.setItem("loginStatus", localStorage.getItem("loginStatus"));
    sessionStorage.setItem("userID", localStorage.getItem("userID"));
    sessionStorage.setItem("isAdmin", localStorage.getItem("isAdmin")); */

    this.loginStatus$ = this.loginService.isLoggedIn;
    this.userName$ = this.loginService.currentUserName;
    this.isAdmin$ = this.loginService.isAdmin;


  }

  loginStatus$ : Observable<boolean>;

  userName$ : Observable<string>;

  isAdmin$ : Observable<boolean>;

  

  onLogout() {
    this.loginService.logout();
  }

}
