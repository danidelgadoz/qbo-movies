import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userCredentials = {
    email: 'admin@example.com',
    password: '123456',
  };

  constructor() {
    setTimeout(() => {
      this.userCredentials.email = ''
    }, 3000)
  }

  ngOnInit(): void {
  }

  login() {
    console.log('credentials', this.userCredentials)
  }

}
