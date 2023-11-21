import { createAction, props } from "@ngrx/store";

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

export const incrementCounter = createAction('[Increase Counter] Counter', props<{count: number}>());
export const decrementCounter = createAction('[Decrease Counter] Counter', props<{count: number}>());
export const resetCounter = createAction('[Reset Counter] Counter', props<{count: number}>());
export const errorHandler = createAction('[Error Handling] Error', props<{error: string}>());