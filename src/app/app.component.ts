import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { setSidebarIsOpen } from '../core/store/actions/sidebar.actions';
import { selectSidebarIsOpen } from '../core/store/selectors/sidebar.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly isOpenSidebar$ = this.store$.select(selectSidebarIsOpen);
  constructor(private readonly store$: Store) {}
  openSidebar() {
    this.store$.dispatch(setSidebarIsOpen({ isOpen: false }));
  }
}
