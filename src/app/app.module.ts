import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppInterceptor } from './app.interceptor';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { MovieModule } from './movie/movie.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    MovieModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'not-found', component: NotFoundComponent },
      { path: '', redirectTo: 'movies', pathMatch: 'full' },
      { path: '**', redirectTo: 'not-found' },
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
