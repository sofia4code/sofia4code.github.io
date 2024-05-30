import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonSheetConvertComponent } from './json-sheet-convert/json-sheet-convert.component';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';
import { Base64EncodeComponent } from './base64-encode/base64-encode.component';
import { Base64DecodeComponent } from './base64-decode/base64-decode.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    routes.push({path:'json-sheet', component: JsonSheetConvertComponent})
    routes.push({path:'json-format', component: JsonFormatterComponent})
    routes.push({path:'base64-encode', component: Base64EncodeComponent})
    routes.push({path:'base64-decode', component: Base64DecodeComponent})
  }
}
