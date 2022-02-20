import { createAction, props } from '@ngrx/store';
import { Movie, MovieQueryParams } from '../../models/movies.model';

export const getMovies = createAction('[Movies] GET MOVIES');

export const addMovie = createAction('[Movies] CREATE MOVIE', props<{movie: Movie}>());
export const updateMovie = createAction('[Movies] UPDATE MOVIE', props<{movieId: number, movie: Movie}>());

export const setMovies = createAction(
  '[Movies] SET MOVIES',
  props<{ movies: Movie[] }>()
);

export const setMovie = createAction(
  '[Movies] SET MOVIE',
  props<{ movie: Movie }>()
);

export const setFilters = createAction(
  '[Movies] SET FILTERS',
  props<{ filters: MovieQueryParams }>()
);
