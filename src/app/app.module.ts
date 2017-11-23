import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RawPreviewComponent } from './raw-preview/raw-preview.component';
import { HttpClientModule } from "@angular/common/http";
import { FormFieldComponent } from './form-field/form-field.component';


@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    RawPreviewComponent,
    FormFieldComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
