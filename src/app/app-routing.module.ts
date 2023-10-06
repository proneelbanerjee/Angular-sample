import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  { path: 'template-form', loadChildren: () => import('./template-form/template-form.module').then(m => m.TemplateFormModule),component: TemplateFormComponent },
  { path: 'reactive-form', loadChildren: () => import('./reactive-form/reactive-form.module').then(m => m.ReactiveFormModule), component: ReactiveFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

