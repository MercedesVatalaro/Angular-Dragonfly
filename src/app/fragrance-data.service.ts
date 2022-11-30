import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Fragrance } from './fragrance-list/fragrance';


const URL = 'https://62b468be530b26da4cbdd233.mockapi.io/api/v1/fragrances/fragrances';
@Injectable({
  providedIn: 'root'
})
export class FragranceDataService {

  constructor(private http: HttpClient) { }

  /**
   * Consume la API de fragrancias y devuelve un observable a la respuesta
   */

  public getAll(): Observable<Fragrance[]> {



    return this.http.get<Fragrance[]>(URL)
      .pipe(
        tap((fragrances: Fragrance[]) => fragrances.forEach(fragrance => fragrance.quantity = 0)),

      );


  }


}
