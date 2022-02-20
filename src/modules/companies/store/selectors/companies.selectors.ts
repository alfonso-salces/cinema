import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, companiesFeatureKey } from '../reducers/companies.reducer';

export const selectCompaniesState = createFeatureSelector<State>(companiesFeatureKey);

export const selectCompanies = createSelector(selectCompaniesState, (state: State) => state.companies);