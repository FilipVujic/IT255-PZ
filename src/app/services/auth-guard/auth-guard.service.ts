import { Injectable, OnInit } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  
  isAdmin: boolean = false;
  isLoggedIn: boolean = false;

  constructor(private router: Router) { 
    
  }


  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (localStorage.getItem("isAdmin") == "1") {
      return true;
    } else {
      alert('Permission denied!')
      this.router.navigate(['']);
      return false;
    }
  }

}