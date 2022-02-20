import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movies } from '../models/movies.model';


@Injectable()
export class MoviesService {
constructor(private readonly http: HttpClient) {}

    /**
     *
     * Gives every movie from company id if it's provided, or all movies if isn't provided.
     * @param id - string
     * @returns Movies[]
     *
     */
    getMoviesFromCompany(id?: number): Observable<Movies[]> {
        return this.http.get<Movies[]>('http://localhost:3000/movies').pipe(
            map(item => item.filter(movie => movie.companyId === id))
        );
    }
}