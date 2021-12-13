import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParfumComponent } from './parfum.component';
import {ParfumdetailComponent } from './parfumdetail/parfumdetail.component';

const routes: Routes = [
  { path: '', component: ParfumComponent },
  { path: ':id', component:ParfumdetailComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParfumRoutingModule { }
