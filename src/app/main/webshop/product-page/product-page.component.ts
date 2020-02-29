import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/models/product.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit, OnDestroy {
  index: number;
  product: Product;
  productsLoaded: Promise<boolean>;

  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.index = params['id']);
    this.subscription = this.productService.getProductByID(this.index).subscribe(
      (product: Product) => {
        this.product = product;
        this.productsLoaded = Promise.resolve(true);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
