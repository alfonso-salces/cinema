import { createReducer, on } from '@ngrx/store';
import {
  setLoading,
  setMenuConfig,
  setSidebarIsOpen,
} from '../actions/core.actions';

export const coreFeatureKey = 'core';

export interface State {
  loading: boolean;
  isSidebarOpen: boolean;
  menu: { icon: string; title: string };
}

export const initialState: State = {
  loading: false,
  isSidebarOpen: false,
  menu: { icon: 'assets/icons/more.png', title: 'Películas' },
};

export const reducer = createReducer(
  initialState,
  on(setSidebarIsOpen, (state, { isSidebarOpen }) => ({
    ...state,
    isSidebarOpen,
  })),
  on(setLoading, (state, { loading }) => ({ ...state, loading })),
  on(setMenuConfig, (state, { icon, title }) => ({
    ...state,
    menu: { icon, title },
  }))
);
