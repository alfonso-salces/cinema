import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Actor } from '../../../actors/models/actors.models';
import { Company } from '../../../companies/models/companies.model';
import { Movie } from '../../models/movies.model';

@Component({
  selector: 'dle-edit-movie-form',
  templateUrl: './edit-movie-form.component.html',
  styleUrls: ['./edit-movie-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditMovieFormComponent implements OnChanges {
  @Input() movie!: Movie | undefined | null;
  @Input() genres!: string[] | undefined | null;
  @Input() selectedActorsNames!: string[] | undefined | null;
  @Input() selectedActors!: Actor[] | undefined | null;
  @Input() actors!: Actor[] | undefined | null;
  @Input() company!: Company | undefined | null;
  @Input() companies!: Company[] | undefined | null;
  @Output() onMovieSave: EventEmitter<Movie> = new EventEmitter<Movie>();
  form!: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      id: new FormControl(),
      title: new FormControl(''),
      poster: new FormControl(''),
      genre: new FormControl(),
      actors: new FormControl(),
      company: new FormControl(),
      year: new FormControl(),
      imdbRating: new FormControl(),
      duration: new FormControl(),
    });
  }

  ngOnChanges(): void {
    if (this.movie && this.selectedActors && this.company) {
      this.form.patchValue(
        {
          id: this.movie?.id,
          title: this.movie?.title,
          poster: this.movie?.poster,
          genre: this.movie?.genre,
          actors: this.movie?.actors,
          company: this.company?.id,
          year: this.movie?.year,
          imdbRating: this.movie?.imdbRating,
          duration: this.movie?.duration,
        },
        { emitEvent: false, onlySelf: true }
      );
    }
  }

  saveMovie() {
    this.onMovieSave.emit(this.form.value);
  }

  onSelectGenres(event: any) {
    console.log(event);
  }

  onSelectActors(event: any) {
    console.log(event);
  }

  onSelectCompanies(event: any) {
    console.log(event);
  }
}
