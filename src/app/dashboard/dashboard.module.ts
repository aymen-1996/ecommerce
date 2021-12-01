import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProductsComponent } from '../products/products.component';
import { CategoriesComponent } from '../categories/categories.component';
import { OrdersComponent } from '../orders/orders.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductsComponent,
    CategoriesComponent,
    OrdersComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
