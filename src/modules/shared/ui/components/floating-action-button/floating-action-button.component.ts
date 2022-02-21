import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FabConfig } from '../../models/ui.models';

@Component({
  selector: 'dle-fab',
  templateUrl: './floating-action-button.component.html',
  styleUrls: ['./floating-action-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloatingActionButtonComponent {
  @Input() config!: FabConfig;
}
