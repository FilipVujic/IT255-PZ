import { User } from './../../models/user.model';
import { userUrl } from './../../config/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(registerForm: FormGroup) {

    let user: User;
    user = new User(
      registerForm.get('username').value ,
      registerForm.get('email').value ,
      registerForm.get('password').value 
    );


      return this.http.post(userUrl, user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

}
