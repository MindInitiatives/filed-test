import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';
import {User} from '../../models/user.model';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SearchCountryField, TooltipLabel, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { PaymentService } from 'src/app/services/payment.service';
import { ReactiveFormConfig, RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  separateDialCode = true;
	SearchCountryField = SearchCountryField;
	TooltipLabel = TooltipLabel;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  dataForm : FormGroup
  user : User
  submitted = false;
  
  constructor(private toastr: ToastrService,
              private router: Router,
              private paymentService: PaymentService, 
              private formBuilder: RxFormBuilder) { }

  ngOnInit(): void { 

    this.dataForm = this.formBuilder.formGroup(User);

    this.dataForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      adBudget: ['', Validators.required],
      phone: [undefined, [Validators.required]]
    }
    );

  }

  get dataFormControl() {
    return this.dataForm.controls;
  }


  create() {
    this.submitted = true;
    if (this.dataForm.valid) {
      this.paymentService.addUser(this.dataForm.value);
      this.toastr.success('User Added');
      this.router.navigate(['/user-data']);
      console.log(this.dataForm.value);
    }
    else {
      this.toastr.error("Please Fill in All Fields", 'Something Went Wrong!', {
        timeOut: 3000,
      });
    }
    

  }

}
