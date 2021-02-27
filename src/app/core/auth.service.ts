import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const BACKEND_ENDPOINT = environment.backendEndpoint;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  loginWithUserCredentials(username: string, password: string): Observable<any> {
    const body = {
      username: username,
      password: password,
    };
    return this.http.post(`${BACKEND_ENDPOINT}/oauth/token`, body)
      .pipe(
        tap((response) => {
          const responseInStringFormat = JSON.stringify(response);
          localStorage.setItem('session', responseInStringFormat);
        })
      );
  }

  isLogged(): boolean {
    return localStorage.getItem('session') ? true : false;
  }

  logout(): void {
    localStorage.clear();
  }
}
