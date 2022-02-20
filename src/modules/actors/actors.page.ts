/* eslint-disable @angular-eslint/component-selector */
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dle-actors',
  templateUrl: 'actors.page.html',
  styleUrls: ['actors.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActorsPage {}
