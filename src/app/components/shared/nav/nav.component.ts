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
