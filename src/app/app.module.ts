import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieCatalogComponent } from './movie-catalog/movie-catalog.component';

const MATERIAL_MODULES = [
  MatCardModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    MovieCatalogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ...MATERIAL_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
