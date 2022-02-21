import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor } from '../models/actors.models';

@Injectable()
export class ActorsService {

  constructor(private readonly http: HttpClient) {}

  getActors(): Observable<Actor[]> {
    return this.http.get<Actor[]>('http://localhost:3000/actors');
  }

  getActorsFromMovie(movieId: number) {
    return this.http.get<Actor[]>(`http://localhost:3000/actors/${movieId}`);
  }

}
