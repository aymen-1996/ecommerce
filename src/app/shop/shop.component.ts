import { Component, OnInit } from '@angular/core';
import {shop } from "src/app/shop-list";
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  public shopList = shop;

  constructor() { }

  ngOnInit(): void {
    console.log(this.shopList);

  }

}
