import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { CartComponent } from "./cart/cart.component";
import { LoginComponent } from './Auth/login/login.component';
import { RegistreComponent } from './Auth/registre/registre.component';
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistreComponent },
  { path: 'shops', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) },
  { path: 'books', loadChildren: () => import('./shop/books/books.module').then(m => m.BooksModule) },
  { path: 'parfum', loadChildren: () => import('./shop/parfum/parfum.module').then(m => m.ParfumModule) },
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
    FormsModule,
    CommonModule
  ]
})
export class AppRoutingModule { }
