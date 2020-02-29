import { AlertService } from 'src/app/shared/services/alert.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-webshop',
  templateUrl: './webshop.component.html',
  styleUrls: ['./webshop.component.scss']
})
export class WebshopComponent implements OnInit, OnDestroy {

  public products: Product[]
  private subscription: Subscription;
  public isLoading: boolean = false;

  constructor(private productService: ProductService, private alert: AlertService) { 
  }

  ngOnInit() {
    this.isLoading = true;
    this.subscription = this.productService.getAllProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
        this.isLoading = false;
      }, () => {
        this.alert.showAlert("failed", "De webshop kan op dit moment niet geladen worden. Probeer het later opnieuw.");
        this.isLoading = false;
      }); 
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
