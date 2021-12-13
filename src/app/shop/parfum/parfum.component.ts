import { Component, OnInit } from '@angular/core';
import { CartService } from "src/app/services/cart.service";
import { ParfumService } from "src/app/services/parfum.service";

@Component({
  selector: 'app-parfum',
  templateUrl: './parfum.component.html',
  styleUrls: ['./parfum.component.css']
})
export class ParfumComponent implements OnInit {

    public shopsList: any = [];
  
    constructor(
      private cartService: CartService,
      private parfumService: ParfumService
    ) { }
  
    ngOnInit(): void {
      this.parfumService.all().subscribe(
        res => this.shopsList = res
      );
    }
  
    public addToCart(id: string) {
      this.cartService.add(id);
    }
  
  }