import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'filed-test';
  optionForm : FormGroup;

  
  ngOnInit(): void {
    this.optionForm = new FormGroup({
      option: new FormControl('', Validators.required),
      adBudget: new FormControl('', Validators.required)});
  }


  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  next() {

  }
}
