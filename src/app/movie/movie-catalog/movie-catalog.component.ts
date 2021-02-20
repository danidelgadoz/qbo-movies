import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie-core/movie.interface';
import { MovieService } from '../movie-core/movie.service';

@Component({
  selector: 'app-movie-catalog',
  templateUrl: './movie-catalog.component.html',
  styleUrls: ['./movie-catalog.component.scss']
})
export class MovieCatalogComponent implements OnInit {
  myMovies: Movie[] = [];
  errorMessage = '';
  errorOcurred = false;

  constructor(
    private movieService: MovieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // load movies from service...
    this.loadMovies();
  }

  onNavigateToAddMovie(): void {
    this.router.navigate(['/movies/add']);
  }

  private loadMovies(): void {
    this.movieService.getMovies()
      .subscribe(
        (data) => {
          this.myMovies = data;
        },
        (error) => {
          this.errorOcurred = true;
          this.errorMessage = error;
        }
      );
  }

}
