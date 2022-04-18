import { createFeatureSelector, createSelector } from '@ngrx/store';
//
// const selectAppState = createFeatureSelector<AppState>('tarantulaState');
// //export const selectTarantulas = createFeatureSelector<Array<Tarantula>>('tarantula');
// //export const selectActiveTarantula = createFeatureSelector<Tarantula>('active');
// export const selectTarantulas = createSelector(
//   selectAppState, (state) => state.tarantula);
// export const selectActiveTarantula = createSelector(
//   selectAppState, (state) => state.active);
// export const selectTarantulaById = (id: string) => createSelector(
//   selectTarantulas,
//   (state) => state.find(t => t.id === id));
//
//  export const selectIsTarantulasLoaded = createSelector(selectTarantulas, state => state.length !== 0);
/*
export const tarantulaSelector = (state: AppState) => state.tarantulas;
export const tarantulaByIdSelector = (tarantulaId:string) => createSelector(
  tarantulaSelector,
  (tarantulas: Tarantula[]) => {
    return tarantulas.find(t => t.id === tarantulaId);
  });
*/
