import { createAction, props } from '@ngrx/store';
import { Tarantula } from '../../model/tarantula.model';

export enum TarantulaAction {
  GET_TARANTULAS = '[COLLECTION] Get all Tarantulas',
  GET_TARANTULAS_SUCCESS = '[Tarantula API] Fetch Tarantulas Success',
  GET_TARANTULAS_FAILURE = '[Tarantula API] Fetch Tarantulas Failed',

  CREATE_TARANTULA = '[COLLECTION] Add Tarantula',
  REMOVE_TARANTULA = '[COLLECTION] Remove Tarantula',
  GET_TARANTULA = '[COLLECTION] Get Tarantulas by id',

  UPDATE_TARANTULA = '[TARANTULA] Update Tarantula',
  SET_ACTIVE_TARANTULA = '[TARANTULA] Set Active Tarantula',
}

export const appLoaded = createAction("[App] Tarantula App Loaded");


export const fetchTarantulasAction = createAction(
  TarantulaAction.GET_TARANTULAS
);
export const fetchTarantulasSuccess = createAction(
  TarantulaAction.GET_TARANTULAS_SUCCESS,
  props<{ tarantulas: Tarantula[] }>()
);
export const fetchTarantulasFailure = createAction(
  TarantulaAction.GET_TARANTULAS_FAILURE,
  props<{ error: any }>()
);
/*
export const createTarantulaAction = createAction(
  TarantulaActionType.CREATE_TARANTULA,
  props<{tarantula: Tarantula}>()
);
export const createTarantulasSuccess = createAction(
  "[Tarantula API] Create tarantulas Success",
  props<{ tarantulas: Tarantula }>()
);
export const createTarantulasFail = createAction(
  "[Tarantula API] Create tarantulas Fail",
  props<{ error: any }>()
);

export const removeTarantulaAction = createAction(
  TarantulaActionType.REMOVE_TARANTULA,
  props<{tarantula: Tarantula}>()
);
export const removeTarantulasSuccess = createAction(
  "[Tarantula API] Remove tarantulas Success",
  props<{ tarantulas: Tarantula }>()
);
export const removeTarantulasFail = createAction(
  "[Tarantula API] Remove tarantulas Fail",
  props<{ error: any }>()
);
*/




/*
export const getTarantulaAction = createAction(
  TarantulaActionType.GET_TARANTULA,
  props<{tarantulas: Tarantula[]}>()
);
export const setActiveTarantulaAction = createAction(
  TarantulaActionType.SET_ACTIVE_TARANTULA,
  props<{tarantula: Tarantula}>()
);
export const updateTarantulaAction = createAction(
  TarantulaActionType.UPDATE_TARANTULA,
  props<{tarantula: Tarantula}>()
);

success

export class GetTarantulasAction implements Action {
  readonly type = TarantulaActionType.GET_TARANTULAS;
  constructor(public payload: Tarantula[]) {};
}
export class AddItemAction implements Action {
  readonly type = CourseActionType.ADD_ITEM;
  //add an optional payload
  constructor(public payload: CourseItem) {}
}


export const setActiveTarantula = createAction(
  TarantulaActionType.SET_ACTIVE_TARANTULA,
  props<{tarantula: Tarantula}>()
);
*/
