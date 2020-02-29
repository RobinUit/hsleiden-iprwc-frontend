import { AlertService } from './alert.service';
import { ApiService } from './api.service';
import { Product } from 'src/app/shared/models/product.model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private classURL: string = "/product";
  private params = new HttpParams()

  constructor(private api: ApiService, private alert: AlertService) { }

  public getAllProducts() {
    return this.api.get<Product[]>(this.classURL + '/all', this.params).pipe(map(
      (products: Product[]) => {
        return products;
      }));
  }

  public getProductByID(id: number) {
    return this.api.get<Product>(this.classURL + "/" + id, this.params).pipe(map(
      (product: Product) => {
        return product;
      }, () => {
        this.alert.showAlert("failed", "De webshop kan op dit moment niet geladen worden. Probeer het later opnieuw.")
      }));
  }
}
