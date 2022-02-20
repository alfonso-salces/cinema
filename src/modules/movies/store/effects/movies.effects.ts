import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { MoviesService } from '../../services/movies.services';
import {
  addMovie,
  getMovies,
  setMovie,
  setMovies,
  updateMovie,
} from '../actions/movies.actions';

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

  constructor(
    private readonly actions$: Actions,
    private readonly moviesService: MoviesService
  ) {}
}
