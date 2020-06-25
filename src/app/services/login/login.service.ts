import { Observable, BehaviorSubject } from 'rxjs';
import { userUrl, userUrlAux } from './../../config/api';
import { User } from './../../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());
  private UserName = new BehaviorSubject<string>(localStorage.getItem("username"));

  login(username: string): Observable<User> {

    return this.http.get<User[]>(userUrlAux + "/" + username).pipe(
      map((data: any) => {

        let user: User;
        
        for (let i in data) {
          user = new User(data[0]["userID"], data[0]["username"], data[0]["password"], data[0]["email"]);
        }

        /* console.log(data[0]["username"])
        console.log(data[0]["email"]) */
        return user;
      }));
  }

  checkLoginStatus(): boolean {
    return false;
  }

  logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("loginStatus");
  }

  get isLoggedIn() {
    return this.loginStatus.asObservable();
  }

  get currentUserName() {
    return this.UserName.asObservable();
  }
}

