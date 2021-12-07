import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from './Auth/login/login.component';
import { RegistreComponent } from './Auth/registre/registre.component';
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: 'login', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistreComponent },
  { path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) },
  { path:'**', component: NotFoundComponent },
  
];

@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    NotFoundComponent,
   
  ],
  imports: [
    RouterModule.forRoot(routes), FormsModule, CommonModule
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
