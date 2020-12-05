import { ThunkAction } from "redux-thunk";
import { Action } from "redux";

/*
* S - StateType
* P - return type
* A - actions
*/
export type ThunkType<A extends Action, S, P = Promise<void>> = ThunkAction<P, S, unknown, A>;