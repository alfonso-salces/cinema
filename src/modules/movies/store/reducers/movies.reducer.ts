import { createReducer, on } from '@ngrx/store';
import { Movie, MovieQueryParams } from '../../models/movies.model';
import { setFilters, setMovies } from '../actions/movies.actions';


export const moviesFeatureKey = 'movies';

export interface State {
  movies: Movie[] | null;
  filters: MovieQueryParams | null;
}

export const initialState: State = {
  movies: null,
  filters: null
};

export const reducer = createReducer(
  initialState,
  on(setFilters, (state, {filters}) => ({...state, filters})),
  on(setMovies, (state, {movies}) => ({...state, movies}))
);
