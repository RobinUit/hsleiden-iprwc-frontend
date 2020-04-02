import { AlertService } from './../../../../shared/services/alert.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './../../../../shared/services/auth.service';
import { OrderService } from './../../../../shared/services/order.service';
import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';

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

  constructor(private orderService: OrderService, public auth: AuthService, private router: Router, private alert: AlertService) {
    this.handlePaymentReponse();
  }

  handlePaymentReponse() {
    const orderID = localStorage.getItem("orderID");

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
          localStorage.removeItem("orderID")
        },
        () => {
          this.alert.showAlert("failed", "Bestelling niet gevonden");
          localStorage.removeItem("orderID")
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