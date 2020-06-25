import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

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
      console.log(user);
    });
  }

}
