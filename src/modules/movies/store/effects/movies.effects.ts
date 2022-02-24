import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { from, map, Observable, of, switchMap, withLatestFrom } from 'rxjs';
import { CompaniesService } from 'src/modules/companies/services/companies.service';
import { ActorsService } from '../../../actors/services/actors.service';
import { MoviesService } from '../../services/movies.services';
import {
  addMovie,
  addMovieToCompany,
  editCompany,
  getActors,
  getCompanies,
  getMovieById,
  getMovies,
  noAction,
  removeCurrentMovie,
  saveCompany,
  setMovie,
  setMovies,
  setMoviesActors,
  setMoviesCompanies,
  setSelectedMovie,
  updateMovie,
} from '../actions/movies.actions';
import { State } from '../reducers/movies.reducer';

@Injectable()
export class MoviesEffects {
  readonly getMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getMovies),
      switchMap(() =>
        this.moviesService
          .getMovies()
          .pipe(map((response) => setMovies({ movies: response })))
      )
    )
  );

  readonly addMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addMovie),
      withLatestFrom(this.store$),
      switchMap(
        ([
          { movie },
          {
            movies: { companies },
          },
        ]) =>
          this.moviesService.addMovie(movie).pipe(
            map((response) => {
              this.store$.dispatch(setMovie({ movie: response }));
              const company = companies.find(
                (company) => movie.company === company.id
              );
              if (company) {
                this.store$.dispatch(
                  editCompany({
                    companyId: movie?.company,
                    company: {
                      ...company,
                      movies: company?.movies
                        ? [...company?.movies, response.id]
                        : [movie.id],
                    },
                  })
                );
              }
              this.router.navigate([`/movies/movie-detail/${response.id}`]);
              return noAction();
            })
          )
      )
    )
  );

  readonly updateMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateMovie),
      switchMap(({ movieId, movie }) =>
        this.moviesService
          .updateMovie(movieId, movie)
          .pipe(
            switchMap((response) => [
              setMovie({ movie: response }),
              addMovieToCompany({ movieId, companyId: movie.company }),
              setSelectedMovie({ selectedMovie: response }),
            ])
          )
      )
    )
  );

  readonly removeMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeCurrentMovie),
      withLatestFrom(this.store$),
      switchMap(
        ([
          ,
          {
            movies: { companies, selectedMovie },
          },
        ]) =>
          this.moviesService.removeMovie(selectedMovie?.id).pipe(
            map(() => {
              if (selectedMovie) {
                const company = companies.find(
                  (company) => selectedMovie.company === company.id
                );
                if (company) {
                  return editCompany({
                    companyId: selectedMovie?.company,
                    company: {
                      ...company,
                      movies: company.movies.filter(
                        (companyMovie) => companyMovie !== selectedMovie.id
                      ),
                    },
                  });
                }
              }
              return noAction();
            })
          )
      )
    )
  );

  readonly updateCompany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editCompany),
      switchMap(({ company, companyId }) =>
        this.companiesService
          .updateCompany(companyId, company)
          .pipe(map((response) => saveCompany({ company: response })))
      )
    )
  );

  readonly getActors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getActors),
      switchMap(() =>
        this.actorsService
          .getActors()
          .pipe(map((actors) => setMoviesActors({ actors })))
      )
    )
  );

  readonly getCompanies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCompanies),
      switchMap(() =>
        this.companiesService
          .getCompanies()
          .pipe(map((companies) => setMoviesCompanies({ companies })))
      )
    )
  );

  readonly getSelectedMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getMovieById),
      withLatestFrom(this.store$),
      switchMap(
        ([
          { id },
          {
            movies: { movies, actors, companies },
          },
        ]): Observable<any> => {
          if (!actors?.length) {
            this.store$.dispatch(getActors());
          }
          if (!companies?.length) {
            this.store$.dispatch(getCompanies());
          }
          if (movies?.length) {
            return of(
              setSelectedMovie({
                selectedMovie: movies.find((movie) => movie.id === id),
              })
            );
          }
          return this.moviesService.getMovies().pipe(
            switchMap((response) =>
              from([
                setMovies({ movies: response }),
                setSelectedMovie({
                  selectedMovie: response?.find((movie) => movie.id === id),
                }),
              ])
            )
          );
        }
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly moviesService: MoviesService,
    private readonly store$: Store<{ movies: State }>,
    private readonly actorsService: ActorsService,
    private readonly companiesService: CompaniesService,
    private readonly router: Router
  ) {}
}
