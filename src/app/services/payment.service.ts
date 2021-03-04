import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {selectUsers} from '../user/store/selector/user.selectors';
import {UserState} from '../user/store/reducer/user.reducer';
import { User } from '../models/user.model';
import { addUser } from '../user/store/action/user.actions';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private store: Store<UserState>) { }


  addUser(data)  {
    this.store.dispatch(addUser(data));
  }
}
