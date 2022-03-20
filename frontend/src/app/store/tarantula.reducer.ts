import { createReducer, on } from '@ngrx/store';
import { AppState } from './app.state';
import { createTarantulaAction, retrivedTarantulasAction, setActiveTarantulaAction } from './tarantula.action';

export const initialState: AppState =
{
  tarantula: [],
  active: null,
}

export const tarantulasReducer = createReducer(
  initialState,
  on(retrivedTarantulasAction, (state, { tarantulas }) => {
    return {
      ...state,
      tarantula: tarantulas
    }
  }),
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
);
