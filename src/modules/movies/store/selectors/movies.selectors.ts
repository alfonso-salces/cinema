import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Actor } from '../../../actors/models/actors.models';
import { State, moviesFeatureKey } from '../reducers/movies.reducer';

export const selectMoviesState = createFeatureSelector<State>(moviesFeatureKey);
export const selectMovies = createSelector(
  selectMoviesState,
  (state: State) => state.movies
);
export const selectSelectedMovie = createSelector(
  selectMoviesState,
  (state: State) => state.selectedMovie
);
export const selectActorsNamesFromCurrentMovie = createSelector(
  selectMoviesState,
  (state: State) => {
    const actors = state.selectedMovie?.actors;
    const fn = (actor: Actor) => `${actor.first_name} ${actor.last_name}`;
    if (actors?.length) {
      return state.actors
        ?.filter((actor) => actors.some((item) => item === actor.id))
        .map(fn);
    }
    return state.actors?.map(fn);
  }
);
export const selectActorsFromCurrentMovie = createSelector(
  selectMoviesState,
  (state: State) => {
    const actors = state.selectedMovie?.actors;
    if (actors?.length) {
      return state.actors?.filter((actor) =>
        actors.some((item) => item === actor.id)
      );
    }
    return state.actors;
  }
);
export const selectCompaniesFromMovie = createSelector(
  selectMoviesState,
  (state: State) =>
    state.companies?.find((company) =>
      company.movies.some((movie) => movie === state?.selectedMovie?.id)
    )
);
export const selectViewMode = createSelector(
  selectMoviesState,
  (state: State) => state.viewMode
);
export const selectGenres = createSelector(
  selectMoviesState,
  (state: State) => state.genres
);
export const selectActors = createSelector(
  selectMoviesState,
  (state: State) => state.actors
);
export const selectCompanies = createSelector(
  selectMoviesState,
  (state: State) => state.companies
);
