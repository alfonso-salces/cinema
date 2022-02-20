import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { CompaniesService } from '../../services/companies.service';
import { getCompanies, getCompanyFromMovie, setCompanies, setCurrentCompany } from '../actions/companies.actions';

@Injectable()
export class CompaniesEffects {
  getCompanies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCompanies),
      switchMap(() =>
        this.companiesService
          .getCompanies()
          .pipe(map((response) => setCompanies({ companies: response })))
      )
    )
  );

  getCompanyFromMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCompanyFromMovie),
      switchMap(({ movieId }) =>
        this.companiesService
          .getCompanyFromMovie(movieId)
          .pipe(map((response) => setCurrentCompany({ company: response })))
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly companiesService: CompaniesService
  ) {}
}
