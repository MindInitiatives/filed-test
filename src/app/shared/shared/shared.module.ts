import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FooterBottomComponent } from './footer-bottom/footer-bottom.component';



@NgModule({
  declarations: [FooterComponent, FooterBottomComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent, FooterBottomComponent
  ]
})
export class SharedModule { }
