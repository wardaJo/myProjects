import { UserService } from "../services/user.service";
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      switchMap(() =>
        this.userSrv.getUsers2(1).pipe(
          map((users) => UserActions.loadUsersSuccess({ users })),
          catchError(() => of({ type: 'Load Users Error' }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private userSrv: UserService) {}
}
