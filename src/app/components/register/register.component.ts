import { RegisterService } from './../../services/register/register.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { LoginService } from 'src/app/services/login/login.service';

/**
 *
 * @param form
 */

function passwordsMatchValidator(form) {
  const password = form.get('password')
  const confirmPassword = form.get('confirmPassword')

  if(password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ passwordsMatch: true })
  } else {
    confirmPassword.setErrors(null)
  }

  return null
}

/* function symbolValidator(control) {
  if(control.hasError('required')) return null;
  if(control.hasError('minlength')) return null;

  if(control.value.indexOf('@') > -1) {
    return null
  } else {
    return { symbol: true }
  }
} */

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private builder: FormBuilder, 
    private registerService: RegisterService, 
    private loginService: LoginService) { }

  ngOnInit() {
    this.buildForm()
  }

  buildForm() {
    this.registerForm = this.builder.group({
      /* name: ['', Validators.required], */
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ''
    }, {
      validators: passwordsMatchValidator
    })
  }

  register() {

    this.registerService.register(this.registerForm).subscribe(() => {
      this.loginService.login(this.registerForm.get('username').value, this.registerForm.get('password').value).subscribe((user) => { });
    });
    
  }

}
