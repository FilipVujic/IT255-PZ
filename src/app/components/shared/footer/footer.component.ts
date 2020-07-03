import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  loginStatus$ : Observable<boolean>;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

    this.loginStatus$ = this.loginService.isLoggedIn;
  }

}
