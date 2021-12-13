import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParfumRoutingModule } from './parfum-routing.module';
import { ParfumComponent } from './parfum.component';
import { ParfumdetailComponent } from './parfumdetail/parfumdetail.component';


@NgModule({
  declarations: [
    ParfumComponent,
    ParfumdetailComponent
  ],
  imports: [
    CommonModule,
    ParfumRoutingModule
  ]
})
export class ParfumModule { }
