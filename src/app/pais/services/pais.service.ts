import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private url: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    const url: string = `${this.url}/name/${termino}`;

    return this.http.get<Country[]>(url);
  }

  buscarPaisPorCapital(termino: string): Observable<Country[]> {
    const url: string = `${this.url}/capital/${termino}`;

    return this.http.get<Country[]>(url);
  }

  buscarPaisPorCodigo(id: string): Observable<Country> {
    const url: string = `${this.url}/alpha/${id}`;

    return this.http.get<Country>(url);
  }

  buscarPaisesPorRegion(region: string): Observable<Country[]> {
    const url: string = `${this.url}/region/${region}`;

    return this.http.get<Country[]>(url);
  }
}
