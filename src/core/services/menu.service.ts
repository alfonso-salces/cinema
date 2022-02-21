import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface MenuItem {
    id: number;
    path: string;
}

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
  getMenu(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>('http://localhost:3000/menu');
  }
}
