import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoviesPage } from './pages/movies-list/movies.page';
import { MoviesRoutingModule } from './movies-routing.module';
import { CreateMoviePage } from './pages/create-movie/create-movie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MoviesRoutingModule
  ],
  declarations: [MoviesPage, CreateMoviePage]
})
export class MoviesModule {}
