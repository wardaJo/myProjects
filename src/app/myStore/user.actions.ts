import { createAction, props } from '@ngrx/store';
import { UserModel } from "../models/user-model";

export const loadUsers = createAction('[User] Load Users');

//define action to fetch users from the api

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: UserModel[] }>()
);


// export const addUser = createAction(
//   '[User] Add User',
//   props<{ user: UserModel }>()
// );

// export const removeUser = createAction(
//   '[User] Remove UserModel',
//   props<{ userId: number }>()
// );
