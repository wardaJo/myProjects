import { UserModel } from "../models/user-model";
import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';

export interface UserState extends EntityState<UserModel> {
  // Additional state properties can go here
}

export const adapter: EntityAdapter<UserModel> = createEntityAdapter<UserModel>();

// define the initial state of the state (the state type is UserModel)
export const initialState: UserState = adapter.getInitialState();

export const userReducer = createReducer(
  initialState,

  //define reducer to apply the Action(fetch users from api)) on the initial state
  on(UserActions.loadUsersSuccess, (state, { users }) => {
    //return adapter.addMany(users, state); 
    console.log('Payload:', users);
    console.log('Current State:', state);
    return adapter.addMany(users, state);
  }),

  // on(UserActions.addUser, (state, { user }) =>
  //   adapter.addOne(user, state)
  // ),

  // on(UserActions.removeUser, (state, { userId }) =>
  //   adapter.removeOne(userId, state)
  // )
);
