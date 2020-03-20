import { Subscription } from 'rxjs';
import { AlertService } from './../../shared/services/alert.service';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  product: Product;
  subscription: Subscription;
  productsLoaded: Promise<boolean>;

  constructor(
    private router: Router,
    private productService: ProductService) { }


  ngOnInit() {
    this.subscription = this.productService.getProductByID(1).subscribe((product: Product) => {
      this.product = product
      this.productsLoaded = Promise.resolve(true);
    });
  }

  buyEbook() {
    this.router.navigate(['/webshop/' + this.product.id]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
