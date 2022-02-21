/* eslint-disable @angular-eslint/component-selector */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movies.model';
import { getMovies } from '../../store/actions/movies.actions';
import { selectMovies } from '../../store/selectors/movies.selectors';

@Component({
  selector: 'dle-movies-list',
  templateUrl: 'movies-list.page.html',
  styleUrls: ['movies-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesListPage {

  readonly movies$: Observable<Movie[] | undefined | null> = this.store$.select(selectMovies);

  constructor(private readonly store$: Store, private readonly router: Router) {
    this.store$.dispatch(getMovies());
  }

  navigateToMovie(movie: Movie) {
    this.router.navigate([`/movies/movie-detail/${movie.id}`]);
  }

  onAddClick() {
    this.router.navigate([`/movies/create-movie`]);
  }

}
