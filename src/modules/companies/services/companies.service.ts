import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/companies.model';


@Injectable()
export class CompaniesService {
constructor(private readonly http: HttpClient) {}

    /**
     *
     * Gives every company available.
     *
     * @returns Company[]
     *
     */
    getCompanies(): Observable<Company[]> {
        return this.http.get<Company[]>('http://localhost:3000/companies');
    }

    getCompanyFromMovie(movieId: number): Observable<Company> {
        return this.http.get<Company>(`http://localhost:3000/companies/${movieId}`);
    }
}
