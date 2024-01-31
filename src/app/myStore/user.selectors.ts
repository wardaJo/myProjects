import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter, UserState } from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>('users');

//define the selctores to select the users from the store
export const selectAllUsers = createSelector(
  selectUserState,
  adapter.getSelectors().selectAll
);
