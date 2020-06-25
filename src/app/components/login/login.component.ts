import { RouterModule, Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {}

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  } 

  login() {

    this.loginService.login(this.model.username).subscribe((user) => {
      
      localStorage.setItem("username", user.username);
      localStorage.setItem("loginStatus", "1");

      console.log(user)
    });
  }

}
