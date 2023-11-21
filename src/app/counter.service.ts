import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  increaseCounter(state: any) {
    return state['count']['count']+1; // need to refactor this
  }

  decreaseCounter(state: any) {
    return state['count']['count']-1;
  }

  resetCounter() {
    return 0;
  }
}
