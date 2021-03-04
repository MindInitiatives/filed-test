import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { TestimonialComponent } from './components/testimonial/testimonial.component';



@NgModule({
  declarations: [FooterComponent, TestimonialComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent, TestimonialComponent
  ]
})
export class SharedModule { }
