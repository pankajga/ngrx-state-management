import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, from, map, of, switchMap, withLatestFrom } from "rxjs";
import { CounterService } from "../counter.service";
import { appState } from "../state/app.state";
import { decrement, decrementCounter, errorHandler, increment, incrementCounter, reset } from "../actions/counter.action";
import { selectCount } from "../selectors/counter.selector";

@Injectable()
export class CounterEffects {

    constructor(
        private actions$: Actions,
        private counterService: CounterService,
        private store$: Store<appState>
    ){}

    increment$ = createEffect(() =>
        this.actions$.pipe(
            ofType(increment),
            withLatestFrom(this.store$), //with latest will get us the state from which we can get current value
            //[] inside switch map. first arg is action type and second arg is the state from store
            switchMap(([,c]) => 
                from(of(this.counterService.increaseCounter(c))).pipe(
                    map((data) => incrementCounter({count: data})),
                    catchError((error) => of(errorHandler({error})))
                )
            )
        )
    )

    decrement$ = createEffect(() =>
        this.actions$.pipe(
            ofType(decrement),
            withLatestFrom(this.store$),
            switchMap(([,c]) => 
                from(of(this.counterService.decreaseCounter(c))).pipe(
                    map((data) => decrementCounter({count: data})),
                    catchError((error) => of(errorHandler({error})))
                )
            )
        )
    )

    reset$ = createEffect(() =>
        this.actions$.pipe(
            ofType(reset),
            switchMap(() => 
                from(of(this.counterService.resetCounter())).pipe(
                    map((data) => incrementCounter({count: data})),
                    catchError((error) => of(errorHandler({error})))
                )
            )
        )
    )
}