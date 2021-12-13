import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CartService } from "src/app/services/cart.service";

import { books } from "src/app/books-list";

@Component({
  selector: 'app-booksdetail',
  templateUrl: './booksdetail.component.html',
  styleUrls: ['./booksdetail.component.css']
})
export class BooksDetailComponent implements OnInit {


  public book?: any;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
     const bookId = params.get('id');
     this.book = books.filter(book => book.id == bookId)[0];
    });
  }

  addToCart(id: string) {
    this.cartService.add(id);
  }

}