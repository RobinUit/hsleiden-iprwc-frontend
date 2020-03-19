import { Status } from './../../../../shared/models/status.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './../../../../shared/services/auth.service';
import { OrderService } from './../../../../shared/services/order.service';
import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';
import { Item } from 'src/app/shared/models/item.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentComponent implements OnDestroy {

  paymentSucceeded: boolean;
  receivedStatus: boolean;
  subscription: Subscription;
  subscription1: Subscription;

  constructor(private orderService: OrderService, public auth: AuthService, private router: Router) {
    this.handlePaymentReponse();
  }

  handlePaymentReponse() {
    const orderID = sessionStorage.getItem("orderID");

    if (orderID != null) {
      this.subscription = this.orderService.getOrderStatus(orderID).subscribe(
        (status: string) => {
          if (status == "paid") {
            this.subscription1 = this.orderService.getOrder().subscribe(
              (order: Order) => {
                order.email;
              }
            )
            document.getElementById('paymentSuccess').style.display = 'block';
          } else {
            document.getElementById('paymentFail').style.display = 'block';
          }
        }
      )
    }
  }

  navigateHome() {
    this.router.navigate(["/home"]);
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
    if (this.subscription1 != null) {
      this.subscription1.unsubscribe();
    }
  }
}