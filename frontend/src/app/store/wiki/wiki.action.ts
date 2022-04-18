import { Action, createAction, props } from '@ngrx/store';

// export enum TarantulaActionType {
//   CREATE_TARANTULA = '[TARANTULA] Add Tarantula',
//   REMOVE_TARANTULA = '[TARANTULA] Remove Tarantula',
//   UPDATE_TARANTULA = '[TARANTULA] Update Tarantula',
//   GET_TARANTULAS = '[TARANTULA] Get all Tarantulas',
//   GET_TARANTULA = '[TARANTULA] Get Tarantulas by id',
//   SET_ACTIVE_TARANTULA = '[TARANTULA] Set Active Tarantula',
// }
//
// export const retrivedTarantulasAction = createAction(
//   TarantulaActionType.GET_TARANTULAS,
//   props<{tarantulas: Tarantula[]}>()
// );
//
// export const setActiveTarantulaAction = createAction(
//   TarantulaActionType.SET_ACTIVE_TARANTULA,
//   props<{tarantula: Tarantula}>()
// );
//
// export const createTarantulaAction = createAction(
//   TarantulaActionType.CREATE_TARANTULA,
//   props<{tarantula: Tarantula}>()
// );
//
// export const updateTarantulaAction = createAction(
//   TarantulaActionType.UPDATE_TARANTULA,
//   props<{tarantula: Tarantula}>()
// );
/*
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
