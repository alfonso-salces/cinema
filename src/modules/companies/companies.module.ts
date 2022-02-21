import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesPage } from './companies.page';
import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesService } from './services/companies.service';
import { StoreModule } from '@ngrx/store';
import { companiesFeatureKey, reducer } from './store/reducers/companies.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CompaniesEffects } from './store/effects/companies.effects';

@NgModule({
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    StoreModule.forFeature(companiesFeatureKey, reducer),
    EffectsModule.forFeature([CompaniesEffects])
  ],
  declarations: [CompaniesPage],
  providers: [CompaniesService]
})
export class CompaniesModule {}
