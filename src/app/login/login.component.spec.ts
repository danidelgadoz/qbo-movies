import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { FakeAuthService } from 'src/tests/fakes.spec';
import { AuthService } from '../core/auth.service';

import { LoginComponent } from './login.component';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        MatSnackBarModule
      ],
      providers: [
        { provide: AuthService, useClass: FakeAuthService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with email and password controls', () => {
    expect(component.formLogin.contains('email')).toBeTruthy();
    expect(component.formLogin.contains('password')).toBeTruthy();
  });

  it('should make the password control required', () => {
    const control = component.formLogin.get('password');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
});
