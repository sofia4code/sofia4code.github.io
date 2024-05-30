import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JsonSheetConvertComponent } from './json-sheet-convert/json-sheet-convert.component';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Base64EncodeComponent } from './base64-encode/base64-encode.component';
import { Base64DecodeComponent } from './base64-decode/base64-decode.component';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    JsonSheetConvertComponent,
    Base64EncodeComponent,
    Base64DecodeComponent,
    JsonFormatterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgJsonEditorModule, FormsModule, ReactiveFormsModule, BrowserModule,
    MatInputModule,
    MatCardModule,
    ClipboardModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
