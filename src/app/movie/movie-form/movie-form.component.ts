import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MovieService } from '../core/movie.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {
  movieForm: FormGroup;

  constructor(
    private movieService: MovieService,
    private snackBar: MatSnackBar,
  ) {

  }

  ngOnInit(): void {
    this.movieForm = new FormGroup({
      title: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.maxLength(20)]),
      overview: new FormControl({ value: '', disabled: false }, []),
      premiere: new FormControl({ value: new Date(), disabled: false }, []),
      posterImage: new FormControl({ value: '', disabled: false }, []),
      genre: new FormControl({ value: '', disabled: false }, []),
    });
  }

  onFormSubmit(): void {
    // console.log('form', this.movieForm.value)
    this.movieService
      .addMovie(this.movieForm.value)
      .subscribe(
        (response) => {
          console.log('response', response);
          this.snackBar.open('Movie has been created!', 'OK', {
            duration: 3000,
          });
        },
        (error) => {
          console.log('MovieFormComponent => onFormSubmit => error', error);
          this.handleOnCreateMovieError(error);
        }
      );
  }

  handleOnCreateMovieError(error: string) {
    let errorMessage = ''

    switch (error) {
      case 'INVALID_PHONE_NUMBER':
        errorMessage = 'Invalid phone number';
        break
      case 'INVALID_EMAIL':
        errorMessage = 'Invalid email';
        break
      default:
        errorMessage = 'Ups! something went wrong';
    }

    this.snackBar.open(errorMessage, 'OK', {
      duration: 3000,
    });

  }


}
