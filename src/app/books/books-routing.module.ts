import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books.component';
import {BooksdetailComponent } from './booksdetail/booksdetail.component';

const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: ':id', component:BooksdetailComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
