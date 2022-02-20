/* eslint-disable @angular-eslint/component-selector */
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dle-movies',
  templateUrl: 'movies.page.html',
  styleUrls: ['movies.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesPage {}
