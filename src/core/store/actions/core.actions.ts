import { createAction, props } from '@ngrx/store';

export const setLoading = createAction(
  '[Core] SET LOADING STATE',
  props<{ loading: boolean }>()
);
export const setSidebarIsOpen = createAction(
  '[Core] SET IS OPEN',
  props<{ isSidebarOpen: boolean }>()
);
export const setMenuConfig = createAction(
  '[Core] SET MENU CONFIG',
  props<{ icon: string, title: string }>()
);
