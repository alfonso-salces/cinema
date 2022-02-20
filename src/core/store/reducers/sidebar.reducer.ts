import { createReducer, on } from '@ngrx/store';
import { setSidebarIsOpen } from '../actions/sidebar.actions';

export const sidebarFeatureKey = 'sidebar';

export interface State {
  isOpen: boolean | null;
}

export const initialState: State = {
  isOpen: false,
};

export const reducer = createReducer(
  initialState,
  on(setSidebarIsOpen, (state, {isOpen}) => ({...state, isOpen})),
);
