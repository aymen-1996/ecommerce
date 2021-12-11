import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';
// import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegistreComponent } from './Auth/registre/registre.component';

// const routes: Routes = [];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    LoginComponent,
    RegistreComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

 }
