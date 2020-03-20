import { ValidatedOrder } from './../../../../shared/models/validatedOrder.model';
import { AuthService } from './../../../../shared/services/auth.service';
import { OrderService } from './../../../../shared/services/order.service';
import { CheckoutComponent } from './../checkout.component';
import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';
import { Item } from 'src/app/shared/models/item.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, OnChanges {

  @Output() messageEvent = new EventEmitter<string>();
  @Input() order: Order;
  @Input() items: Item[];

  totalItems: number = 0;
  subTotal: number;
  isLoading: boolean = false;

  constructor(private parent: CheckoutComponent, private orderService: OrderService, private auth: AuthService) { }

  ngOnInit() {
    this.getTotalAmountOfItems();
    this.subTotal = this.order.totalAmount + this.order.shippingCosts;
  }

  private getTotalAmountOfItems() {
    this.totalItems = 0;
    this.items.forEach((item: Item) => {
      this.totalItems = this.totalItems + item.amount;
    })
  }

  ngOnChanges() {
    this.order = this.parent.order;
    this.items = this.parent.items;
  }

  changePage(page: string) {
    this.messageEvent.emit(page);
  }

  validateAndPayOrder() {
    this.isLoading = true;
    this.order.userID = this.auth.databaseUserData.id;
    
    this.orderService.validateOrderAndInitiatePayment(this.order).subscribe(
      (validatedOrder: ValidatedOrder) => {      
        sessionStorage.setItem("orderID", validatedOrder.orderID.toString());
        this.resetOrder();
        window.open(validatedOrder.checkoutURL, "_self")
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  private resetOrder() {
    this.order.items = [];
    this.order.message = null;
    this.order.shippingCosts = null;
    this.order.totalAmount = null;
    this.order.userID = null;

    this.orderService.setOrder(this.order);
  }
}