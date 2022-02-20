import { createAction, props } from '@ngrx/store';
import { Company } from '../../models/companies.model';

export const getCompanies = createAction(
  '[Companies] GET COMPANIES'
);

export const setCompanies = createAction(
  '[Companies] SET COMPANIES',
  props<{ companies: Company[] }>()
);

export const setCurrentCompany = createAction(
  '[Companies] SET CURRENT COMPANY',
  props<{ company: Company }>()
);

export const getCompanyFromMovie = createAction(
  '[Companies] GET COMPANY FROM MOVIE',
  props<{ movieId: number }>()
);
