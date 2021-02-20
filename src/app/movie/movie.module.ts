import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieCatalogComponent } from './movie-catalog/movie-catalog.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieComponent } from './movie.component';
import { MovieDetailGuard } from './movie-detail.guard';


const MATERIAL_MODULES = [
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule
];

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
    ReactiveFormsModule,
    FlexLayoutModule,
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
    ...MATERIAL_MODULES,
  ]
})
export class MovieModule { }
