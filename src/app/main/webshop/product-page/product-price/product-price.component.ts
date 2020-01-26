import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.scss']
})
export class ProductPriceComponent implements OnInit {

  name: string = "Back to the Roots E-Book";
  price: string = "€9,99";
  extraInfo1: string = "Baguette";
  benefit1: string = "Goedkoop";
  benefit2: string = "Snel";
  benefit3: string = "makkelijk"

  constructor() { }

  ngOnInit() {
  }

  inShoppingCart() {
    console.log("test");
  }

}
