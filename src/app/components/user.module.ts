import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAddComponent } from './user-add/user-add.component';
import { StoreModule } from '@ngrx/store';
import { userFeatureKey, reducer } from '../user/store/reducer/user.reducer';
import {  RxFormBuilder, RxReactiveFormsModule } from "@rxweb/reactive-form-validators"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UserDataComponent } from './user-data/user-data.component';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [UserAddComponent, UserDataComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    NgxIntlTelInputModule,
    StoreModule.forFeature(userFeatureKey, reducer),
  ],
  exports: [
    UserAddComponent,
    UserDataComponent
  ],
  providers: [RxFormBuilder]
})
export class UserModule { }
