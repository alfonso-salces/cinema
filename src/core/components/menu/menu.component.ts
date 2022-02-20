import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { setSidebarIsOpen } from '../../store/actions/sidebar.actions';

@Component({
  selector: 'dle-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  @Input() sidebarOpen: boolean | null = false;
  constructor(private readonly store$: Store) {}
  openSidebar() {
    this.store$.dispatch(setSidebarIsOpen({isOpen: true}));
  }
}
