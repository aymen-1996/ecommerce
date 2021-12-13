import { Component, OnInit } from '@angular/core';

import {product } from "src/app/product-list";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productList = product;


  constructor() { }

  ngOnInit(): void {
    console.log(this.productList);


  }

}
