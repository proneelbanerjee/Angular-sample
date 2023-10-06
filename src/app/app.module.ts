import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // If you have a separate routing module
import { TemplateFormModule } from './template-form/template-form.module'; // Adjust the path accordingly
import { ReactiveFormModule } from './reactive-form/reactive-form.module'; // Adjust the path accordingly

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Add your routing module here if you have one
    TemplateFormModule,
    ReactiveFormModule
    // Other modules you may have
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

