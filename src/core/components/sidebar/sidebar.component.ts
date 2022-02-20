import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dle-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {

  readonly menuItems = ['Películas', 'Actores', 'Estudios'];

}
