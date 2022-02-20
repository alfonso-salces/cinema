import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, MovieQueryParams } from '../models/movies.model';

@Injectable()
export class MoviesService {
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
    return this.http.get<Movie[]>('http://localhost:3000/movies', { params });
  }

  /**
   *
   * Creates a new movie
   * @param movie - Movie
   * @returns Movie
   *
   */
  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>('http://localhost:3000/movies', movie);
  }

  updateMovie(movieId: number, movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(
      `http://localhost:3000/movies/${movieId}`,
      movie
    );
  }
}
