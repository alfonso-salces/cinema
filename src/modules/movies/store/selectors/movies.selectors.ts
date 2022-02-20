import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, moviesFeatureKey } from '../reducers/movies.reducer';

export const selectMoviesState = createFeatureSelector<State>(moviesFeatureKey);

export const selectMovies = createSelector(selectMoviesState, (state: State) => state.movies);