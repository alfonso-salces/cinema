import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { finalize, Observable } from 'rxjs';
import { setLoading } from '../store/actions/core.actions';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private readonly store$: Store) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.store$.dispatch(setLoading({ loading: true }));
    return next
      .handle(req)
      .pipe(
        finalize(() => this.store$.dispatch(setLoading({ loading: false })))
      );
  }
}
