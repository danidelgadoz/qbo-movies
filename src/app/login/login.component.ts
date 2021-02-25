import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  formLogin: FormGroup;
  loginSuscription: Subscription;
  loading = false;

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

  ngOnDestroy(): void {
    this.loginSuscription?.unsubscribe();
  }

  onNavigateToRegisterPage(): void {
    this.router.navigate(['/register']);
  }

  login() {
    this.loading = true;

    this.loginSuscription = this.authService
      .loginWithUserCredentials(this.formLogin.value.email, this.formLogin.value.password)
      .subscribe(
        (data) => {
          console.log('success', data)
          // this.router.navigate(['/movies']);
        },
        (error) => {
          console.log('error', error)
        },
        () => {
          console.log("el servicio respondio")
          this.loading = false;
        }
      );

  }

}
