import { Order } from './../../../shared/models/order.model';
import { OrderService } from './../../../shared/services/order.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/shared/models/item.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {

  currentPage: string = "shopping-cart";
  order: Order;
  items: Item[];

  subscription: Subscription;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.subscription = this.orderService.getOrder().subscribe((order: Order) => {
      this.order = order;
      this.items = this.order.items;
    })
  }

  changeCurrentPage($event: string) {
    window.scrollTo(0,0)
    this.currentPage = $event;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
