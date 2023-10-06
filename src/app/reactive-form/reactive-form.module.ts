import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './reactive-form.component';
// import { CustomDirective } from './custom.directive'; // Remove this line

@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [CommonModule],
  exports: [ReactiveFormComponent]
})
export class ReactiveFormModule { }
