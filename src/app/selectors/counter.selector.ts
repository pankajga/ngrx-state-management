import { createFeatureSelector, createSelector } from "@ngrx/store";
import { appState } from "../state/app.state";
import { counterState } from "../state/counter.state";

// export interface FeatureState {
//     counter: number;
// }

// export interface AppState {
//     feature: FeatureState;
// }

export const getCountState = createFeatureSelector<counterState>('count');

export const selectCount = createSelector(getCountState, (state) => state.count);

// export const selectFeatureCount = createSelector(
//     selectFeature,
//     (state: appState) => state.counter
// );