import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'template-form', loadChildren: () => import('./template-form/template-form.module').then(m => m.TemplateFormModule) },
  { path: 'reactive-form', loadChildren: () => import('./reactive-form/reactive-form.module').then(m => m.ReactiveFormModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

