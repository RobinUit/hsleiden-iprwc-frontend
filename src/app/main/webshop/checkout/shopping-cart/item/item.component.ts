import { ShoppingCartComponent } from './../shopping-cart.component';
import { OrderService } from './../../../../../shared/services/order.service';
import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/shared/models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<Item>();
  @Input() item: Item;
  totalPrice: string;
  amount: number;

  constructor(private orderService: OrderService, private shoppingCart: ShoppingCartComponent) { }

  ngOnInit() {
    this.amount = this.item.amount;
    setTimeout(() => {
      this.updateAmount();
    }, 0)
  }

  updateAmount() {
    if (this.amount == 0 || this.amount == null) {
      this.amount = 1;
    } else if (this.amount > this.item.product.stock) {
      this.amount = this.item.product.stock;
    }

    this.item.amount = this.amount;
    this.setTotalPrice();
    this.messageEvent.emit(this.item);
  }

  removeFromShoppingCart() {
    this.orderService.removeItemFromOrder(this.item);
    this.shoppingCart.calculatePrices();
  }

  setTotalPrice() {
    let totalPriceNumber = +this.item.product.price.toFixed(2) * this.item.amount
    this.totalPrice = totalPriceNumber.toFixed(2).toString();
  }
}
