import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { Actor } from '../../../actors/models/actors.models';
import { Company } from '../../../companies/models/companies.model';
import { Movie, ViewMode } from '../../models/movies.model';
import {
  addMovieToCompany,
  getMovieById,
  removeCurrentMovie,
  saveMovie,
  setViewMode,
} from '../../store/actions/movies.actions';
import {
  selectActors,
  selectActorsFromCurrentMovie,
  selectActorsNamesFromCurrentMovie,
  selectCompanies,
  selectCompaniesFromMovie,
  selectGenres,
  selectSelectedMovie,
  selectViewMode,
} from '../../store/selectors/movies.selectors';

@Component({
  selector: 'dle-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetailPage implements OnInit {
  readonly movieDetail$: Observable<Movie | undefined | null> =
    this.store$.select(selectSelectedMovie);
  readonly actorsNamesFromCurrentMovie$: Observable<
    string[] | undefined | null
  > = this.store$.select(selectActorsNamesFromCurrentMovie);
  readonly actorsFromCurrentMovie$: Observable<Actor[] | undefined | null> =
    this.store$.select(selectActorsFromCurrentMovie);
  readonly companyFromCurrentMovie$: Observable<Company | undefined | null> =
    this.store$.select(selectCompaniesFromMovie);
  readonly genres$: Observable<string[] | null | undefined> =
    this.store$.select(selectGenres);
  readonly viewMode$: Observable<string | null> =
    this.store$.select(selectViewMode);
  readonly company$: Observable<Company | null | undefined> =
    this.store$.select(selectCompaniesFromMovie);
  readonly companies$: Observable<Company[] | null | undefined> =
    this.store$.select(selectCompanies);
  readonly actors$ = this.store$.select(selectActors);
  readonly viewMode = ViewMode;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store$: Store,
    private readonly router: Router
  ) {}

  ngOnInit() {
    const url = this.route.snapshot.url?.[0]?.path;
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.store$.dispatch(getMovieById({ id: parseInt(id) }));
    }
    this.store$.dispatch(setViewMode({ viewMode: url }));
  }

  onEditClick() {
    this.store$.dispatch(setViewMode({ viewMode: this.viewMode.EDIT_MOVIE }));
  }

  onRemoveClick() {
    this.store$.dispatch(removeCurrentMovie());
    this.router.navigate(['/movies']);
  }

  onMovieSave(movie: Movie) {
    if (movie.company && typeof movie.company !== 'number') {
      movie.company = parseInt(movie.company);
    }
    this.store$.dispatch(
      addMovieToCompany({ companyId: movie.company, movieId: movie.id })
    );
    this.store$.dispatch(saveMovie({ movie }));
    this.router.navigate([`/movies/movie-detail/${movie.id}`]);
  }
}
