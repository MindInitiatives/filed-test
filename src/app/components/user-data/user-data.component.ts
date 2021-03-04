import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable, ReplaySubject } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserState } from '../../user/store/reducer/user.reducer';
import { selectUsers } from '../../user/store/selector/user.selectors';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';
import { PaymentService } from 'src/app/services/payment.service';


interface Budget {
  id: number;
  amount: number;
}


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})


export class UserDataComponent implements OnInit, OnDestroy {

  
budgets: Budget[] = [
  { id: 0, amount: 120000 },
  { id: 1, amount: 150000 },
  { id: 2, amount: 220000 },
  { id: 3, amount: 250000 }
];


  optionForm : FormGroup;

  users$ : {};
  data : boolean = false;
  private destroyed$: ReplaySubject <boolean> = new ReplaySubject(1);

  constructor(private store: Store<UserState>) {

    this.store.select(selectUsers).subscribe(users => {

      
      if (users.length) {
      this.data = true
      console.log('products', users[0]);
      this.users$ = users
      }
    });

    console.log(this.users$);
  }
  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  
  ngOnInit(): void {
    
    ReactiveFormConfig.set({
      "validationMessage": {
          "required": "This field is required",
      }
  });
  
    this.optionForm = new FormGroup({
      option: new FormControl('', Validators.required),
      adBudget: new FormControl(null, Validators.required)});
  }

  next() {

  }

}
