import { Observable } from 'rxjs';
import { userUrl, userUrlAux } from './../../config/api';
import { User } from './../../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  login(username: string): Observable<User> {
    
    let user: User;
    /* localStorage.setItem("username", this.model.username); */
    console.log(username);
    console.log(userUrl + userUrlAux + "/" + username)
    return this.http.get<User>(userUrlAux + "/" + username);
  }

}

