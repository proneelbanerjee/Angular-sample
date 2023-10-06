import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form.component';
import { CustomDirective } from '../custom.directive';
import { CustomPipe } from '../custom.pipe';

@NgModule({
  declarations: [TemplateFormComponent, CustomDirective, CustomPipe],
  imports: [CommonModule, FormsModule],
  exports: [TemplateFormComponent]
})
export class TemplateFormModule { }
