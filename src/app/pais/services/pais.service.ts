import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private url: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<any> {
    const url = `${this.url}/name/${termino}`;

    return this.http.get(url);
  }
}
