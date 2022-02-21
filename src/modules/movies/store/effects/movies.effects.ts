import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { from, map, Observable, of, switchMap, withLatestFrom } from 'rxjs';
import { CompaniesService } from 'src/modules/companies/services/companies.service';
import { ActorsService } from '../../../actors/services/actors.service';
import { MoviesService } from '../../services/movies.services';
import {
  addMovie,
  getActors,
  getCompanies,
  getMovieById,
  getMovies,
  setMovie,
  setMovies,
  setMoviesActors,
  setMoviesCompanies,
  setSelectedMovie,
  updateMovie,
} from '../actions/movies.actions';
import { State } from '../reducers/movies.reducer';

@Injectable()
export class MoviesEffects {
  readonly getMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getMovies),
      switchMap(() =>
        this.moviesService
          .getMovies()
          .pipe(map((response) => setMovies({ movies: response })))
      )
    )
  );

  readonly addMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addMovie),
      switchMap(({ movie }) =>
        this.moviesService
          .addMovie(movie)
          .pipe(map((response) => setMovie({ movie: response })))
      )
    )
  );

  readonly updateMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateMovie),
      switchMap(({ movieId, movie }) =>
        this.moviesService
          .updateMovie(movieId, movie)
          .pipe(map((response) => setMovie({ movie: response })))
      )
    )
  );

  readonly getActors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getActors),
      switchMap(() =>
        this.actorsService
          .getActors()
          .pipe(map((actors) => setMoviesActors({ actors })))
      )
    )
  );

  readonly getCompanies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCompanies),
      switchMap(() =>
        this.companiesService
          .getCompanies()
          .pipe(map((companies) => setMoviesCompanies({ companies })))
      )
    )
  );

  readonly getSelectedMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getMovieById),
      withLatestFrom(this.store$),
      switchMap(([{ id }, { movies, actors, companies }]): Observable<any> => {
        if (!actors?.length) {
          this.store$.dispatch(getActors());
        }
        if (!companies?.length) {
          this.store$.dispatch(getCompanies());
        }
        if (movies?.length) {
          return of(
            setSelectedMovie({
              selectedMovie: movies.find((movie) => movie.id === id),
            })
          );
        }
        return this.moviesService.getMovies().pipe(
          switchMap((response) =>
            from([
              setMovies({ movies: response }),
              setSelectedMovie({
                selectedMovie: response?.find((movie) => movie.id === id),
              }),
            ])
          )
        );
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly moviesService: MoviesService,
    private readonly store$: Store<State>,
    private readonly actorsService: ActorsService,
    private readonly companiesService: CompaniesService
  ) {}
}
