import { Order } from 'src/app/shared/models/order.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { DatabaseOrder } from 'src/app/shared/models/databaseOrder.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: Order[];

  constructor(public auth: AuthService, public orderService: OrderService) { 
    orderService.getAllOrdersByUserID().subscribe(
      (orders: DatabaseOrder[]) => {
        this.orders = orders;
      }
    )
  }

  ngOnInit(): void {
  }
}
