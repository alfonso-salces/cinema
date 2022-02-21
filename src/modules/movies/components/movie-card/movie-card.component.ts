import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../models/movies.model';

@Component({
  selector: 'dle-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieCardComponent {
  @Input() movie!: Movie | null;
  @Output() onMovieClick: EventEmitter<Movie> = new EventEmitter();
}
