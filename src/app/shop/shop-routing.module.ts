import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from "@angular/common";
import { ShopComponent } from './shop.component';
import { DetailShopComponent } from '../detailshop/detailshop.component';

const routes: Routes = [
  { path: '', component: ShopComponent },
  { path: ':id', component: DetailShopComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: [
   DetailShopComponent
  ]
})
export class ShopRoutingModule { }
