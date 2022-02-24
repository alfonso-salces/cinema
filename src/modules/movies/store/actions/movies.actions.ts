import { createAction, props } from '@ngrx/store';
import { Company } from '../../../companies/models/companies.model';
import { Actor } from '../../../actors/models/actors.models';
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

export const setViewMode = createAction('[Movies] SET VIEW MODE', props<{viewMode: string}>());
export const setSelectedMovie = createAction('[Movies] SET SELECTED MOVIE', props<{selectedMovie: Movie | undefined | null}>());
export const getMovieById = createAction('[Movies] GET MOVIE BY ID', props<{id: number}>());
export const getActors = createAction('[Movies] GET ACTORS');
export const getGenres = createAction('[Movies] GET GENRES');
export const getCompanies = createAction('[Movies] GET COMPANIES');
export const setMoviesActors = createAction('[Movies] SET MOVIES ACTORS', props<{actors: Actor[]}>());
export const setMoviesCompanies = createAction('[Movies] SET MOVIES COMPANIES', props<{companies: Company[]}>());
export const setMoviesGenres = createAction('[Movies] SET MOVIES GENRES', props<{genres: string[]}>());
export const removeCurrentMovie = createAction('[Movies] REMOVE CURRENT MOVIE');
export const saveMovie = createAction('[Movies] SAVE MOVIE', props<{movie: Movie}>());
export const addMovieToCompany = createAction('[Movies] ADD MOVIE TO COMPANY', props<{companyId: number | undefined, movieId: number}>());
export const editCompany = createAction('[Movies] EDIT COMPANY', props<{companyId: number | null | undefined, company: Company}>());
export const saveCompany = createAction('[Movies] SAVE COMPANY', props<{company: Company}>());
export const noAction = createAction('[Movies] NO ACTION');