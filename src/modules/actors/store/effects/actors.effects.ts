import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { ActorsService } from '../../services/actors.service';
import {
  getActors,
  getActorsFromMovie,
  setActors,
} from '../actions/actors.actions';

@Injectable()
export class ActorsEffects {
  getActors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getActors),
      switchMap(() =>
        this.actorsService
          .getActors()
          .pipe(map((response) => setActors({ actors: response })))
      )
    )
  );

  getActorsFromMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getActorsFromMovie),
      switchMap(({ movieId }) =>
        this.actorsService
          .getActorsFromMovie(movieId)
          .pipe(map((response) => setActors({ actors: response })))
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly actorsService: ActorsService
  ) {}
}
