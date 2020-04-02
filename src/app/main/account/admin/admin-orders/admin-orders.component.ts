import { OrderService } from './../../../../shared/services/order.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatabaseOrder } from 'src/app/shared/models/databaseOrder.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit, OnDestroy {

  orders: DatabaseOrder[];
  status: string;

  subscription: Subscription;

  constructor(orderService: OrderService) {
    this.subscription = orderService.getAllOrders().subscribe(
      (orders: DatabaseOrder[]) => {
        this.orders = orders;
      }
    )
  }

  ngOnInit(): void {
  }

  public setStatus(status: string) {
    switch (status) {
      case "paid":
      case "completed":
        this.status = "Betaald";
        return "#51A351";
      case "pending":
        this.status = "In afwachting";
        return "#F89406";
      default:
        this.status = "mislukt";
        return "#BD362F";
    }
  }

  public openOrder(order: DatabaseOrder) {
    console.log(order);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
