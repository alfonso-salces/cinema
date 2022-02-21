import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { setSidebarIsOpen } from '../core/store/actions/core.actions';
import {
  selectLoading,
  selectSidebarIsOpen,
} from '../core/store/selectors/core.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly isOpenSidebar$ = this.store$.select(selectSidebarIsOpen);
  readonly loading$ = this.store$.select(selectLoading);
  constructor(private readonly store$: Store) {}
  openSidebar() {
    this.isOpenSidebar$.pipe(take(1)).subscribe((isOpen) => {
      if (isOpen) {
        this.store$.dispatch(setSidebarIsOpen({ isSidebarOpen: false }));
      }
    });
  }
}
