import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    public formBuilder: FormBuilder,
  ) {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  login() {
    this.authService
      .loginWithUserCredentials(this.formLogin.value.email, this.formLogin.value.password)
      .subscribe(
        (data) => {
          console.log('success', data)
          this.router.navigate(['/movies']);
        },
        (error) => {
          console.log('error', error)
        },
      );

  }

}
