import { Item } from './../models/item.model';
import { Subscription } from 'rxjs';
import { Order } from './../models/order.model';
import { OrderService } from './../services/order.service';
import { Animations } from './../../app.animations';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    Animations.enterAnimation
  ]
})
export class HeaderComponent implements OnInit, OnDestroy {

  mobileNavIsOpened: boolean = false;
  order: Order;
  amount = 0;
  subscription: Subscription;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.updateShoppingCartAmount();
  }

  toggleCheck() {
    this.mobileNavIsOpened = !this.mobileNavIsOpened;    
  }

  updateShoppingCartAmount() {    
    this.subscription = this.orderService.getOrder().subscribe((order) => {
      this.order = order;
      if(this.order.items) {
        this.amount = 0;
        this.order.items.forEach((item: Item) => {
          this.amount = this.amount + item.amount
        });
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
    }
}
