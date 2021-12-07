import { Component, OnInit } from '@angular/core';
import { CartService } from "src/app/services/cart.service";
import {shops } from "src/app/shops-list";
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

    public shopsList = shops;
  
    constructor(
      private cartService: CartService,
    ) { }
  
    ngOnInit(): void {
    }
  
    addToCart(id: string) {
      this.cartService.add(id);
    }
  }