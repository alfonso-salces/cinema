import { createReducer, on } from '@ngrx/store';
import { Actor } from '../../../actors/models/actors.models';
import { Company } from '../../../companies/models/companies.model';
import { Movie, MovieQueryParams, ViewMode } from '../../models/movies.model';
import {
  addMovieToCompany,
  removeCurrentMovie,
  saveMovie,
  setFilters,
  setMovies,
  setMoviesActors,
  setMoviesCompanies,
  setMoviesGenres,
  setSelectedMovie,
  setViewMode,
} from '../actions/movies.actions';

export const moviesFeatureKey = 'movies';

export interface State {
  movies: Movie[] | undefined | null;
  filters: MovieQueryParams | null;
  viewMode: string | null;
  selectedMovie: Movie | undefined | null;
  actors: Actor[] | undefined | null;
  genres: string[] | undefined | null;
  companies: Company[];
}

export const initialState: State = {
  movies: null,
  filters: null,
  viewMode: null,
  selectedMovie: null,
  actors: null,
  genres: null,
  companies: [],
};

export const reducer = createReducer(
  initialState,
  on(setFilters, (state, { filters }) => ({ ...state, filters })),
  on(setMovies, (state, { movies }) => {
    const genres: string[] = [];
    movies?.forEach((movie) =>
      movie.genre?.forEach((genre) => genres.push(genre))
    );
    return {
      ...state,
      movies,
      genres: [...new Set(genres)],
    };
  }),
  on(setSelectedMovie, (state, { selectedMovie }) => ({
    ...state,
    selectedMovie,
  })),
  on(setMoviesActors, (state, { actors }) => ({ ...state, actors })),
  on(setMoviesGenres, (state, { genres }) => ({ ...state, genres })),
  on(setMoviesCompanies, (state, { companies }) => ({ ...state, companies })),
  on(saveMovie, (state, { movie }) => {
    if (state.selectedMovie) {
      return {
        ...state,
        selectedMovie: movie,
        viewMode: ViewMode.READ_MOVIE_DETAIL,
        movies: state.movies?.map((mapMovie) => {
          if (mapMovie.id === movie.id) {
            return movie;
          }
          return mapMovie;
        }),
      };
    }
    state.movies?.push(movie);
    return {
      ...state,
      selectedMovie: movie,
      viewMode: ViewMode.READ_MOVIE_DETAIL,
    };
  }),
  on(setViewMode, (state, { viewMode }) => ({ ...state, viewMode })),
  on(addMovieToCompany, (state, { companyId, movieId }) => {
    const filteredCompanies = [...state.companies].map((company) => ({
      ...company,
      movies: company.movies.filter((movie) => movie !== movieId),
    }));
    const companies = filteredCompanies.map((company) => {
      if (company.id === companyId) {
        return {
          ...company,
          movies: [...company.movies, movieId],
        };
      }
      return company;
    });
    return { ...state, companies };
  }),
  on(removeCurrentMovie, (state) => ({
    ...state,
    movies: state.movies?.filter(
      (movie) => movie.id !== state.selectedMovie?.id
    ),
    selectedMovie: null,
  }))
);
