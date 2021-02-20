import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieCatalogComponent } from './movie-catalog/movie-catalog.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieComponent } from './movie.component';
import { MovieDetailGuard } from './movie-detail.guard';

@NgModule({
  declarations: [
    MovieCardComponent,
    MovieCatalogComponent,
    MovieDetailComponent,
    MovieFormComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'movies',
        component: MovieComponent,
        children: [
          { path: '', component: MovieCatalogComponent },
          { path: 'add', component: MovieFormComponent },
          { path: ':id', component: MovieDetailComponent, canActivate: [MovieDetailGuard] },
        ]
      }
    ]),
    SharedModule
  ]
})
export class MovieModule { }
