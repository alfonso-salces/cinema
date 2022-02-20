import { createAction, props } from '@ngrx/store';

export const setSidebarIsOpen = createAction(
  '[Sidebar] SET IS OPEN',
  props<{ isOpen: boolean }>()
);
