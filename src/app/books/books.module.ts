import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BooksdetailComponent } from './booksdetail/booksdetail.component';


@NgModule({
  declarations: [
    BooksComponent,
    BooksdetailComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
