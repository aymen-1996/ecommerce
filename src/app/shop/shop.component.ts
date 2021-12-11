import { Component, OnInit } from '@angular/core';
import { CartService } from "src/app/services/cart.service";
import { ShopService } from "src/app/services/shop.service";
//import {shops } from "src/app/shops-list";
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

    public shopsList: any = [];
  
    constructor(
      private cartService: CartService,
      private shopService: ShopService
    ) { }
  
    ngOnInit(): void {
      this.shopService.all().subscribe(
        res => this.shopsList = res
      );
    }
  
    public addToCart(id: string) {
      this.cartService.add(id);
    }
  
  }