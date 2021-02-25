import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(
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
    console.log(this.formLogin.value)
    // this.router.navigate(['/movies']);
  }

}
