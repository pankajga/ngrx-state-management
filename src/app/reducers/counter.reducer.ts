import { createReducer, on } from "@ngrx/store";
import { decrement, decrementCounter, errorHandler, increment, incrementCounter, reset, resetCounter } from "../actions/counter.action";
import { counterState } from "../state/counter.state";

export const defaultCounterState: counterState = {
    count: 0,
    error: ""
};

export const counterReducer = createReducer(
    defaultCounterState,
    on(incrementCounter, (state, {count}) => ({...state, count: count})),
    on(decrementCounter, (state, {count}) => ({...state, count: count})),
    on(resetCounter, (state, {count}) => ({...state, count: count})),
    on(errorHandler, (state, {error}) => ({...state, error: error}))
);