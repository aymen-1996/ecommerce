import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CartService } from "src/app/services/cart.service";

import { shops } from "src/app/shops-list";

@Component({
  selector: 'app-detailshop',
  templateUrl: './detailshop.component.html',
  styleUrls: ['./detailshop.component.css']
})
export class DetailShopComponent implements OnInit {


  public shop?: any;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
     const shopId = params.get('id');
     this.shop = shops.filter(shop => shop.id == shopId)[0];
    });
  }

  addToCart(id: string) {
    this.cartService.add(id);
  }

}