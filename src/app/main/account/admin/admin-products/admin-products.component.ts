import { Subscription } from 'rxjs';
import { ProductService } from './../../../../shared/services/product.service';
import { Product } from './../../../../shared/models/product.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  products: Product[];
  subscription: Subscription;

  constructor(private productService: ProductService) {
    this.subscription = productService.getAllProducts().subscribe(
      (products: Product[]) => {
        this.products = products;        
      }
    )
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
