import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie-core/movie.interface';
import { MovieService } from '../movie-core/movie.service';

@Component({
  selector: 'app-movie-catalog',
  templateUrl: './movie-catalog.component.html',
  styleUrls: ['./movie-catalog.component.scss']
})
export class MovieCatalogComponent implements OnInit {
  myMovies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    // load movies from service...
    this.myMovies = this.movieService.getMovies();
  }

}
