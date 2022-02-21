import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'dle-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipComponent {

  @Input() className!: string;
  @Input() texts!: string[];

}
