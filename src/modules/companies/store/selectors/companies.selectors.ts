import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, actorsFeatureKey } from '../reducers/companies.reducer';

export const selectActorsState = createFeatureSelector<State>(actorsFeatureKey);

export const selectActors = createSelector(selectActorsState, (state: State) => state.actors);