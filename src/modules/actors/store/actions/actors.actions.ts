import { createAction, props } from '@ngrx/store';
import { Actor } from '../../models/actors.models';

export const getActors = createAction(
  '[Actors] GET ACTORS'
);

export const setActors = createAction(
  '[Actors] SET ACTORS',
  props<{ actors: Actor[] }>()
);

export const getActorsFromMovie = createAction(
  '[Actors] GET ACTORS FROM MOVIE',
  props<{ movieId: number }>()
);
