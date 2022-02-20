/* eslint-disable @angular-eslint/component-selector */
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dle-companies',
  templateUrl: 'companies.page.html',
  styleUrls: ['companies.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompaniesPage {}
