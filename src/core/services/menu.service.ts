import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface MenuItem {
    id: number;
    path: string;
}

@Injectable()
export class MoviesService {
  private readonly apiUrl = `${environment.url}/menu`;
  constructor(private readonly http: HttpClient) {}

  /**
   *
   * Gives every movie with specified filters.
   * @param filters - MovieQueryParams
   * @returns Movie[]
   *
   */
  getMenu(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.apiUrl);
  }
}
