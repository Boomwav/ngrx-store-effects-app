import { Action } from '@ngrx/store';

import { Topping } from '../../models/topping.model';

export const LOAD_TOPPINGS = 'LOAD TOPPINGS';
export const LOAD_TOPPINGS_SUCCESS = 'LOAD TOPPINGS SUCCESS';
export const LOAD_TOPPINGS_FAIL = 'LOAD TOPPINGS FAIL';

export class LoadToppings implements Action {
  readonly type = LOAD_TOPPINGS;
  constructor() {}
}

export class LoadToppingsSuccess implements Action {
  readonly type = LOAD_TOPPINGS_SUCCESS;
  constructor(public payload: Topping[]) {}
}

export class LoadToppingsFail implements Action {
  readonly type = LOAD_TOPPINGS_FAIL;
  constructor(public payload: any) {}
}

export type ToppingsAction =
  | LoadToppings
  | LoadToppingsSuccess
  | LoadToppingsFail;
