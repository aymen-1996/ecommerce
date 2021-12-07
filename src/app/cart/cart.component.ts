import { Component, OnInit } from '@angular/core';
import { CartService } from "src/app/services/cart.service";

import { shops } from "src/app/shops-list";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartContent: any = [];
  totalPrice: number = 0;
  TAX_RATE: number = 0.2;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getCartContentDetails();
    this.computeTotalPrice();
  }

  getCartContentDetails() {
    this.cartContent = this.cartService.cartContent;
    for (let index = 0; index < this.cartContent.length; index++) {
      const shop = shops.filter(shop => shop.id == this.cartContent[index].id)[0];
      this.cartContent[index].title =shop.title;
      this.cartContent[index].price = shop.price;
    }
  }
  computeTotalPrice() {
    this.cartContent.forEach((item: { price: number; quantity: number; }) => {
      this.totalPrice += item.price * item.quantity;
    });
  }

}
