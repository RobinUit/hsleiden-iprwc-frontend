import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productInformation: string = "Test"
  productSpecifications: string = "Test2"

  constructor() { }

  ngOnInit() {
  }

}
