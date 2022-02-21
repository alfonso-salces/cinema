import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type ClassName = 'button--primary' | 'button--secondary';

@Component({
  selector: 'dle-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() disabled = false;
  @Input() className: ClassName = 'button--primary';
  @Input() text = '';
}
