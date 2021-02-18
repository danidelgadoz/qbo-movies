import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {
  movieForm: FormGroup;

  constructor() {

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
    console.log('form', this.movieForm.value)
  }


}
