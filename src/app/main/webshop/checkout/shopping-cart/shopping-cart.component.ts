import { Router } from '@angular/router';
import { OrderService } from './../../../../shared/services/order.service';
import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';
import { Item } from 'src/app/shared/models/item.model';
import { CheckoutComponent } from '../checkout.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<string>();
  @Input() order: Order;
  @Input() items: Item[];

  itemAmount: number = 0;
  digitalItems: number = 0;

  shippingCost1or2Products: number = 4.00;
  shippingCost3To10Products: number = 6.75;
  shippingCost10orMoreProducts: number = 13.00;

  price: number = 0.00;
  shippingCost: number = 0.00;

  constructor(private parent: CheckoutComponent, private orderService: OrderService, private router: Router) { }

  ngOnInit() {
    this.calculatePrices();
  }

  ngOnChanges() {
    this.order = this.parent.order;
    this.items = this.parent.items;
  }

  public calculatePrices() {
    this.getShippingCosts();
    this.getTotalItems();
    this.order.totalAmount = +this.price.toFixed(2).replace(",", "");
    this.order.shippingCosts = +this.shippingCost.toFixed(2).replace(",", "");
  }

  private getShippingCosts() {
    this.getTotalItems();
    if ((this.itemAmount - this.digitalItems) == 1 || (this.itemAmount- this.digitalItems) == 2) {
      this.shippingCost = this.shippingCost1or2Products;
    } else if ((this.itemAmount - this.digitalItems) >= 3 && (this.itemAmount - this.digitalItems) <= 10) {
      this.shippingCost = this.shippingCost3To10Products;
    } else if ((this.itemAmount - this.digitalItems) >= 11) {
      this.shippingCost = this.shippingCost10orMoreProducts;
    } else {
      this.shippingCost = 0;
    }
  }

  private getTotalItems() {
    this.price = 0;
    this.itemAmount = 0;
    this.digitalItems = 0;
    if(this.order.items) {
      this.order.items.forEach((item: Item) => {        
        this.itemAmount = this.itemAmount + item.amount;
        this.price = this.price + (item.amount * +item.product.price.replace(",", "."));

        if(item.product.digital) {
          this.digitalItems = this.digitalItems + item.amount;
        }
      });
    }
  }

  public changePage(page: string) {
    this.messageEvent.emit(page);
  }

  updateTotalAmount() {
    this.calculatePrices();
    this.orderService.setOrder(this.order);
  }

  public navigate() {
    this.router.navigate(['/webshop']);
  }
}
