import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, coreFeatureKey } from '../reducers/core.reducers';

export const selectCoreState = createFeatureSelector<State>(coreFeatureKey);

export const selectSidebarIsOpen = createSelector(
  selectCoreState,
  (state: State) => state.isSidebarOpen
);

export const selectLoading = createSelector(
  selectCoreState,
  (state: State) => state.loading
);

export const selectMenuConfig = createSelector(selectCoreState, (state: State) => state.menu);