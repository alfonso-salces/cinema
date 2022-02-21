import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectMenuConfig } from '../../store/selectors/core.selectors';
import { setSidebarIsOpen } from '../../../core/store/actions/core.actions';

@Component({
  selector: 'dle-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  @Input() sidebarOpen: boolean | null = false;
  readonly config$ = this.store$.select(selectMenuConfig);
  constructor(private readonly store$: Store) {}
  openSidebar() {
    this.store$.dispatch(setSidebarIsOpen({isSidebarOpen: true}));
  }
}
