import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieCatalogComponent } from './movie-catalog/movie-catalog.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieComponent } from './movie.component';
import { MovieRoutingModule } from './movie-routing.module';

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
    MovieRoutingModule,
    SharedModule
  ]
})
export class MovieModule { }
