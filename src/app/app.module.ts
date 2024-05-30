import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JsonSheetConvertComponent } from './json-sheet-convert/json-sheet-convert.component';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    JsonSheetConvertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgJsonEditorModule, FormsModule, ReactiveFormsModule, BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
