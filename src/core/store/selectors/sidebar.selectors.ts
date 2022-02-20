import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, sidebarFeatureKey } from '../reducers/sidebar.reducer';

export const selectSidebarState = createFeatureSelector<State>(sidebarFeatureKey);

export const selectSidebarIsOpen = createSelector(selectSidebarState, (state: State) => state.isOpen);