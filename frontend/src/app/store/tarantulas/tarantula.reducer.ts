import { createReducer, on } from '@ngrx/store';
import {fetchTarantulasFailure, fetchTarantulasSuccess, TarantulaAction} from './tarantula.action';
import { initialState } from './tarantula.state';


export const tarantulasReducer = createReducer(
  initialState,
  on(fetchTarantulasSuccess, (state, {tarantulas}) => {
    return {
      ...state,
      tarantulas: tarantulas,
      error: ""
    }
  }),

  on(fetchTarantulasFailure, (state, { error }) => {
    return {
      ...state,
      error: error
    }
  }),
  /*
  on(setActiveTarantulaAction, (state, {tarantula}) => {
    return {
      ...state,
      active: tarantula
    }
  }),
  on(createTarantulaAction, (state, {tarantula}) => {
    debugger
    return {
      ...state,
      tarantula: [...state.tarantula, tarantula]
    }
  }),
  on(updateTarantulaAction, (state, {tarantula}) => {
    return {
      ...state,
      tarantula: state.tarantula.map(t => tarantula.id === t.id ? tarantula : t)
    }
  }),
  */
);


