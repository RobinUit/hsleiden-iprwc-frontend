import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-webshop',
  templateUrl: './webshop.component.html',
  styleUrls: ['./webshop.component.scss']
})
export class WebshopComponent implements OnInit {

  private products: Product[]

  constructor(private productService: ProductService) { 
  }

  ngOnInit() {
    this.products = this.productService.getAllProducts(); 
  }

}
