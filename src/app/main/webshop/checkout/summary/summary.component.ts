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

  constructor(private parent: CheckoutComponent) { }

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

}