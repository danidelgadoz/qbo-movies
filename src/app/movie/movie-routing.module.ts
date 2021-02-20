import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieCatalogComponent } from './movie-catalog/movie-catalog.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieComponent } from './movie.component';
import { MovieDetailGuard } from './movie-detail.guard';

const movieRoutes: Routes = [
  {
    path: '',
    component: MovieComponent,
    children: [
      { path: '', component: MovieCatalogComponent },
      { path: 'add', component: MovieFormComponent },
      { path: ':id', component: MovieDetailComponent, canActivate: [MovieDetailGuard] },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(movieRoutes) ],
  exports: [ RouterModule ],
})
export class MovieRoutingModule {
  static components = [
    MovieCatalogComponent,
    MovieDetailComponent,
    MovieFormComponent,
    MovieComponent,
  ];
}
