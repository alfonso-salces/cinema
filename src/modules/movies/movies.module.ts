import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesListPage } from './pages/movies-list/movies-list.page';
import { MoviesRoutingModule } from './movies-routing.module';
import { StoreModule } from '@ngrx/store';
import { moviesFeatureKey, reducer } from './store/reducers/movies.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './store/effects/movies.effects';
import { MoviesService } from './services/movies.services';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieDetailPage } from './pages/movie-detail/movie-detail.page';
import { UiModule } from '../shared/ui/ui.module';
import { ActorsService } from '../actors/services/actors.service';
import { CompaniesService } from '../companies/services/companies.service';
import { EditMovieFormComponent } from './components/edit-movie-form/edit-movie-form.component';
import {
  TranslateLoader,
  TranslateModule,
  TranslateStore,
} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/translations/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MoviesRoutingModule,
    StoreModule.forFeature(moviesFeatureKey, reducer),
    EffectsModule.forFeature([MoviesEffects]),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'es',
      isolate: true,
    }),
    UiModule,
  ],
  declarations: [
    MoviesListPage,
    MovieCardComponent,
    MovieDetailPage,
    EditMovieFormComponent,
  ],
  providers: [MoviesService, ActorsService, CompaniesService, TranslateStore],
})
export class MoviesModule {}
