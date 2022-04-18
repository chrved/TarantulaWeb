import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {fetchTarantulasFailure, fetchTarantulasSuccess, TarantulaAction} from "./tarantula.action";
import {catchError, exhaustMap, mergeMap, of, switchMap} from "rxjs";
import {Tarantula} from "../../model/tarantula.model";
import {map, tap} from "rxjs/operators";
import {TarantulaService} from "../../service/tarantula.service";


@Injectable()
export class TarantulaEffects {

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    private tarantulaService: TarantulaService
  ) {
  }

  loadTarantulas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TarantulaAction.GET_TARANTULAS),
      exhaustMap(action => this.tarantulaService.getTarantulas()
        .pipe(
          tap(er => console.log(er)),
          map(tarantulas => fetchTarantulasSuccess({tarantulas})),
          catchError(error => of(fetchTarantulasFailure({error})))
        )
      )
    ))
}
