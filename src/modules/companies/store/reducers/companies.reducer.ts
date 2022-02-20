import { createReducer, on } from '@ngrx/store';
import { Company } from '../../models/companies.model';
import { setCompanies, setCurrentCompany } from '../actions/companies.actions';

export const companiesFeatureKey = 'companies';

export interface State {
  companies: Company[] | null;
  currentCompany: Company | null;
}

export const initialState: State = {
  companies: null,
  currentCompany: null
};

export const reducer = createReducer(
  initialState,
  on(setCompanies, (state, {companies}) => ({...state, companies})),
  on(setCurrentCompany, (state, {company: currentCompany}) => ({...state, currentCompany})),
);
