import { OrderService } from './../../../../shared/services/order.service';
import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';
import { Item } from 'src/app/shared/models/item.model';
import { CheckoutComponent } from '../checkout.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<string>();
  @Input() order: Order;
  @Input() items: Item[];

  paymentSucceeded: boolean;

  constructor(private parent: CheckoutComponent, private orderService: OrderService) { }

  ngOnInit() {
    this.paymentSucceeded = true;
    this.handlePaymentReponse();
  }

  handlePaymentReponse() {
    if(this.paymentSucceeded) {
      this.order.items = [];
      this.order.shippingCosts = null;
      this.order.totalAmount = null;
      this.order.message = null;
  
      this.orderService.setOrder(this.order);
    }
  }

  ngOnChanges() {
    this.order = this.parent.order;
    this.items = this.parent.items;
  }

  changePage(page: string) {
    this.messageEvent.emit(page);
  }

}