import { Component, OnInit } from '@angular/core';
import { CartService } from "src/app/services/cart.service";
import { BookService } from "src/app/services/book.service";
//import {shops } from "src/app/shops-list";
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

    public shopsList: any = [];
  
    constructor(
      private cartService: CartService,
      private bookService: BookService
    ) { }
  
    ngOnInit(): void {
      this.bookService.all().subscribe(
        res => this.shopsList = res
      );
    }
  
    public addToCart(id: string) {
      this.cartService.add(id);
    }
  
  }