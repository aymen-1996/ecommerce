import { Component, OnInit } from '@angular/core';
import { CartService } from "src/app/services/cart.service";
import {shop } from "src/app/shop-list";
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  public shopList = shop;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }
    public addToCart(id: string) {
      this.cartService.add(id);
    }
  

  }


