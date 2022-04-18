import { createReducer, on } from '@ngrx/store';


// export const initialState: AppState =
// {
//   tarantula: [],
//   active: null,
// }
//
// export const tarantulasReducer = createReducer(
//   initialState,
//   on(retrivedTarantulasAction, (state, { tarantulas }) => {
//     return {
//       ...state,
//       tarantula: tarantulas
//     }
//   }),
//   on(setActiveTarantulaAction, (state, {tarantula}) => {
//     return {
//       ...state,
//       active: tarantula
//     }
//   }),
//   on(createTarantulaAction, (state, {tarantula}) => {
//     debugger
//     return {
//       ...state,
//       tarantula: [...state.tarantula, tarantula]
//     }
//   }),
//   on(updateTarantulaAction, (state, {tarantula}) => {
//     return {
//       ...state,
//       tarantula: state.tarantula.map(t => tarantula.id === t.id ? tarantula : t)
//     }
//   }),
// );
