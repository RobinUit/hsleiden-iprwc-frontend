import { OrderService } from './../../../shared/services/order.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  public euro: string;
  public cents: string;

  @Input() product: Product;

  constructor(
    private router: Router,
    private orderService: OrderService) { }

  ngOnInit() {    
    const values = this.product.price.toFixed(2).toString().split(".");
    this.euro = values[0];
    this.cents = values[1];
  }

  showProduct($event) {
    if($event.target.matches('#addToCart')) {
      return;
    }
    this.router.navigate(['/webshop/' + this.product.id])
  }

  addProductToShoppingCart() {
    this.orderService.addProductToOrder(this.product);
  }
}
