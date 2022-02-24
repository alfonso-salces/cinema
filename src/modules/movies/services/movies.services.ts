import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie, MovieQueryParams } from '../models/movies.model';

@Injectable()
export class MoviesService {
  private readonly apiUrl = `${environment.url}/movies`;

  constructor(private readonly http: HttpClient) {}

  /**
   *
   * Gives every movie with specified filters.
   * @param filters - MovieQueryParams
   * @returns Movie[]
   *
   */
  getMovies(filters?: MovieQueryParams): Observable<Movie[]> {
    const params = new HttpParams({ fromObject: filters });
    return this.http.get<Movie[]>(this.apiUrl, { params });
  }

  /**
   *
   * Creates a new movie
   * @param movie - Movie
   * @returns Movie
   *
   */
  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.apiUrl, movie);
  }

  updateMovie(movieId: number, movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.apiUrl}/${movieId}`, movie);
  }

  removeMovie(movieId: number | null | undefined): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${movieId}`);
  }
}
