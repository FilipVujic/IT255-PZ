import { Observable, BehaviorSubject } from 'rxjs';
import { userUrl, userUrlAux } from './../../config/api';
import { User } from './../../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }

  private loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());
  private userName = new BehaviorSubject<string>(localStorage.getItem("username"));
  private adminStatus = new BehaviorSubject<boolean>(this.checkIfAdmin());

  login(username: string, password: string): Observable<User> {

    return this.http.get<User[]>(userUrlAux + "/" + username).pipe(
      map((data: any) => {

        let user: User;

        for (let i in data) {
          user = new User(data[0]["userID"], data[0]["username"], data[0]["email"], data[0]["password"], data[0]["admin"]);
        }

        if (user.username === username && user.password === password) {
          localStorage.setItem("username", user.username);
          localStorage.setItem("loginStatus", "1");
          localStorage.setItem("userID", user.userID.toString());
          if (user.admin) {
            localStorage.setItem("isAdmin", "1");
          }
          else {
            localStorage.setItem("isAdmin", "0");
          }

          this.router.navigate(['/shop']).then(() => {
            window.location.reload();
          });
        }
        else {
          alert("Username and/or password incorrect!");
        }

        return user;
      }));
  }

  checkLoginStatus(): boolean {
    if (localStorage.getItem("loginStatus") == "1")
      return true;
    return false;
  }

  checkIfAdmin(): boolean {
    if (localStorage.getItem("isAdmin") == "1")
      return true;
    return false;
  }

  logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("loginStatus");
    localStorage.removeItem("userID");
    localStorage.removeItem("isAdmin");
    window.location.reload();
  }

  get isLoggedIn() {
    return this.loginStatus.asObservable();
  }

  get currentUserName() {
    return this.userName.asObservable();
  }

  get isAdmin() {
    return this.adminStatus.asObservable();
  }
}

