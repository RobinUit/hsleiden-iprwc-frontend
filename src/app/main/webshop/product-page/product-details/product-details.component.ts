import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productInformation: string = "Test"
  productSpecifications: string = "Test2"

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
