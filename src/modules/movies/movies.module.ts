import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoviesPage } from './movies.page';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MoviesRoutingModule
  ],
  declarations: [MoviesPage]
})
export class MoviesModule {}
