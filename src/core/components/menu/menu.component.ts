import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'dle-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  @Input() sidebarOpen: boolean = false;

}
