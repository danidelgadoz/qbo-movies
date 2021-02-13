import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieCatalogComponent } from './movie-catalog/movie-catalog.component';
import { AppInterceptor } from './app.interceptor';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';

const MATERIAL_MODULES = [
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule
];

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    MovieCatalogComponent,
    MovieDetailComponent,
    WelcomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      { path: 'movies', component: MovieCatalogComponent },
      { path: 'movies/:id', component: MovieDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'not-found', component: NotFoundComponent },
      { path: '', redirectTo: 'movies', pathMatch: 'full' },
      { path: '**', redirectTo: 'not-found' },
    ]),
    ...MATERIAL_MODULES
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
