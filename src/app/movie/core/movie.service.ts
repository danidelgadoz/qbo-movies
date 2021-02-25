import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movie } from './movie.interface';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:3000/api/movie')
      .pipe(
        catchError((error) => {
          return throwError('Ups! Algo salio mal...');
        })
      )
  }

}
