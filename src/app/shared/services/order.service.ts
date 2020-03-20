import { DatabaseOrder } from './../models/databaseOrder.model';
import { Status } from './../models/status.model';
import { ValidatedOrder } from './../models/validatedOrder.model';
import { ApiService } from './api.service';
import { AlertService } from './alert.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { Item } from './../models/item.model';
import { Product } from 'src/app/shared/models/product.model';
import { Order } from './../models/order.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private classURL: string = "/order";
  private product: Product
  private item: Item;
  private items: Item[] = [];
  private order: BehaviorSubject<Order>;
  private valueFound: boolean;
  private params = new HttpParams()

  constructor(
    private alert: AlertService,
    private api: ApiService) {
  }

  getOrder(): Observable<Order> {
    return this.order.asObservable();
  }

  getOrderFromLocalStorage() {
    this.order = new BehaviorSubject<Order>(new Order());

    var retrievedObject = localStorage.getItem('order');

    if (retrievedObject != null) {
      let order: Order = <Order>JSON.parse(retrievedObject);
      this.setOrder(order);
      this.items = this.order.value.items;
    }
  }

  public setOrder(updatedOrder: Order): void {
    this.order.next(updatedOrder);
    localStorage.setItem("order", JSON.stringify(this.order.value));
  }

  public async addProductToOrder(product: Product) {
    this.product = product;
    this.addProduct();
    this.clearVariables();
    this.order.value.items = this.items;
    this.setOrder(this.order.value);
    this.alert.showAlert("success", "Het product is toegevoegd aan je winkelmandje");
  }

  public removeItemFromOrder(item: Item) {
    this.item = item;
    this.removeItem(this.item);
    this.order.value.items = this.items;
    this.setOrder(this.order.value);
    this.alert.showAlert("success", "Het product is verwijderd uit je winkelmandje");
  }

  private addProduct() {
    if (this.itemsArrayIsNotEmpty()) {
      this.items.forEach((item: Item) => {
        this.item = item;
        if (this.item.product.id === this.product.id) {
          this.removeItem(this.item);
          this.addItem(this.item.amount + 1);
          this.valueFound = true;
        }
      })
    }

    if (!this.valueFound) {
      this.addItem(1)
    }
    this.valueFound = false;
  }

  private addItem(amount: number) {
    this.items.unshift(new Item(this.product, amount));
  }

  private removeItem(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  private itemsArrayIsNotEmpty() {
    return this.items.length !== 0;
  }

  private clearVariables() {
    this.product = null;
    this.item = null;
    this.valueFound = false;
  }

  public validateOrderAndInitiatePayment(order: Order) {
    return this.api.post<Order>(this.classURL + "/pay", order).pipe(map(
      (validatedOrder: ValidatedOrder) => {
        return validatedOrder;
      },
      (error: string) => {
        this.alert.showAlert("failed", error);
      }
    ));
  }

  public getOrderStatus(orderID: string) {
    return this.api.get(this.classURL + "/status/" + orderID, this.params).pipe(map(
      (status: Status) => {
        return status.status;
      },
      (error: string) => {
        this.alert.showAlert("failed", error);
      }
    ))
  }

  public getAllOrdersByUserID() {
    return this.api.get(this.classURL + "/all", this.params).pipe(map(
      (orders: DatabaseOrder[]) => {
        return orders;
      }
    ))
  }

  public getAllOrders() {
    return this.api.get(this.classURL + "/admin/all", this.params).pipe(map(
      (orders: DatabaseOrder[]) => {
        return orders;
      }
    ))
  }
}
