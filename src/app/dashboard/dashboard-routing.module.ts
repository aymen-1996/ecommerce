import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';
import { DashboardComponent } from './dashboard.component';
import { OrdersComponent } from '../orders/orders.component';
import { ProductsComponent } from '../products/products.component';

const routes: Routes = [{ path: '', component: DashboardComponent},
{path: 'categorie', component: CategoriesComponent},
{ path: 'product', component: ProductsComponent },
{ path: 'order', component: OrdersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
