import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoviesListPage } from './pages/movies-list/movies-list.page';
import { MoviesRoutingModule } from './movies-routing.module';
import { CreateMoviePage } from './pages/create-movie/create-movie.page';
import { StoreModule } from '@ngrx/store';
import { moviesFeatureKey, reducer } from './store/reducers/movies.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './store/effects/movies.effects';
import { MoviesService } from './services/movies.services';
import { HttpClientModule } from '@angular/common/http';
import { MovieCardComponent } from './components/movie-card/movie-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MoviesRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(moviesFeatureKey, reducer),
    EffectsModule.forFeature([MoviesEffects])
  ],
  declarations: [MoviesListPage, CreateMoviePage, MovieCardComponent],
  providers: [MoviesService]
})
export class MoviesModule {}
