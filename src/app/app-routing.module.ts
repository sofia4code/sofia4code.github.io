import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonSheetConvertComponent } from './json-sheet-convert/json-sheet-convert.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    routes.push({path:'json-sheet', component: JsonSheetConvertComponent})
  }
}
