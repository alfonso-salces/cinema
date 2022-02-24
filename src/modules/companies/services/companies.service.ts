import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from '../models/companies.model';


@Injectable()
export class CompaniesService {
    private readonly apiUrl = `${environment.url}/companies`;
constructor(private readonly http: HttpClient) {}

    /**
     *
     * Gives every company available.
     *
     * @returns Company[]
     *
     */
    getCompanies(): Observable<Company[]> {
        return this.http.get<Company[]>(this.apiUrl);
    }

    getCompanyFromMovie(movieId: number): Observable<Company> {
        return this.http.get<Company>(`${this.apiUrl}/${movieId}`);
    }

    updateCompany(companyId: number | null | undefined, company: Company): Observable<Company>  {
        return this.http.put<Company>(`${this.apiUrl}/${companyId}`, company);
    }
}
