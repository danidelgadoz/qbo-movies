import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log('request', request)
    return next.handle(this.performRequest(request))
      .pipe(
        catchError((err) => this.handleErrorResponse(err)),
      );
  }

  private performRequest(req: HttpRequest<any>): HttpRequest<any> {
    let headers: HttpHeaders = req.headers; // copy my original service headers
    headers = headers.set('MyCustomHeaderKey', `MyCustomHeaderValue`); // apend new headers

    return req.clone({ headers });
  }

  private handleErrorResponse(errorResponse): Observable<HttpEvent<any>> {
    // console.log('error at interceptor', errorResponse);
    // console.log('request', errorResponse)
    switch (errorResponse.status) {
      case 401: // Unauthorized
        alert('NO AUTHORIZADO')
        break;
      case 404: // Unauthorized
        // alert('SERVICIO NO ENCONTRADO')
        break;
      case 500: // Service Unavailable
        // alert('ERROR INTERNO')
        break;
      case 503: // Internal Server Error
        // alert('WEB EN MANTENIMEITNO')
        break;
      default: // Other Error
    }

    return throwError(errorResponse);
  }
}
