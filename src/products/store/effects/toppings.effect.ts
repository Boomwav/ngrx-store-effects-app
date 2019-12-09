import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { of } from 'rxjs/Observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as toppingActions from '../actions/toppings.action';
import * as fromService from '../../services/toppings.service';

@Injectable()
export class ToppingsEffects {
  constructor(
    private action$: Actions,
    private toppingsService: fromService.ToppingsService
  ) {}

  @Effect()
  loadToppings$ = this.action$.ofType(toppingActions.LOAD_TOPPINGS).pipe(
    switchMap(() => {
      return this.toppingsService.getToppings().pipe(
        map(toppings => new toppingActions.LoadToppingsSuccess(toppings)),
        catchError(error => of(new toppingActions.LoadToppingsFail(error)))
      );
    })
  );
}
