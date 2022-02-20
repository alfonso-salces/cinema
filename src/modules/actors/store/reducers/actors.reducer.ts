import { createReducer, on } from '@ngrx/store';
import { Actor } from '../../models/actors.models';
import { setActors } from '../actions/actors.actions';

export const actorsFeatureKey = 'actors';

export interface State {
  actors: Actor[] | null;
}

export const initialState: State = {
  actors: null
};

export const reducer = createReducer(
  initialState,
  on(setActors, (state, {actors}) => ({...state, actors}))
);
