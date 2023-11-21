import { decrement, increment } from "../actions/counter.action";

export interface counterState  {
    count: number,
    error: string
}