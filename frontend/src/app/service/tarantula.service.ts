import { Injectable } from '@angular/core';
import {catchError, Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Tarantula} from '../model/tarantula.model';
import {Store} from "@ngrx/store";

@Injectable({ providedIn: 'root' })
export class TarantulaService {
  private url = 'http://localhost:8080/api/tarantulas/';

  httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
    };

  constructor(private http: HttpClient, private store: Store){}


    getTarantulas(): Observable<Tarantula[]> {
      return this.http.get<Tarantula[]>(this.url)
    }

}
