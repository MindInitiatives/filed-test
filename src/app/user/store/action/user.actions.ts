import { createAction, props } from '@ngrx/store';
import {User} from '../../../models/user.model';

export const addUser = createAction(
  '[User] Add User',
  (user: User) => ({user})
);