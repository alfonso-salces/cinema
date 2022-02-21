import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { setSidebarIsOpen } from '../../../core/store/actions/core.actions';

@Component({
  selector: 'dle-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {

  readonly menuItems = ['Películas', 'Actores', 'Estudios'];

  constructor(private readonly store$: Store) {}
  closeSidebar() {
    this.store$.dispatch(setSidebarIsOpen({isSidebarOpen: false}));
  }

}
