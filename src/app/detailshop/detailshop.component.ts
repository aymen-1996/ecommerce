import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { shop } from "src/app/shop-list";

@Component({
  selector: 'app-detailhop',
  templateUrl: './detailshop.component.html',
  styleUrls: ['./detailshop.component.css']
})
export class DetailShopComponent implements OnInit {

  public shop?: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const shopId = params.get('id');
      this.shop = shop.filter(shop => shop.id == shopId)[0];

    });
  }

}
