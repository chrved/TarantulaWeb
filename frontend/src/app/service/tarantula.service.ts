import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap, first } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Tarantula} from '../model/tarantula.model';

@Injectable({ providedIn: 'root' })
export class TarantulaService {
  private url = 'http://localhost:8080/api/tarantulas/';

  httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

  constructor(private http: HttpClient){}


    getTarantulas(): Observable<Array<Tarantula>> {
      return this.http.get<Tarantula[]>(this.url)
        .pipe(
          //tap(res => console.log("getTarantulas: ", res)),
          map((taratulas) => taratulas || []),
          //catchError(this.handleError<Tarantula[]>('getTarantulas', []))
        );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     *
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
