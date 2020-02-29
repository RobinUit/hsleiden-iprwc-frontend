import { OrderService } from './../../../../shared/services/order.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.scss']
})
export class ProductPriceComponent implements OnInit {

  euro: string;
  cents: string;
  stockText: string;

  @Input() product: Product;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.formatPriceValues();
    this.formatStockText();
  }

  formatPriceValues() {
    const values = this.product.price.toFixed(2).toString().split(".");
    this.euro = values[0];
    this.cents = values[1];
  }

  formatStockText() {    
    if(this.product.stock <= 0) {
      this.stockText = "0 items beschikbaar";
      return;
    } else if (this.product.stock > 1 && this.product.stock <= 10) {
      this.stockText = "Nog slechts " + this.product.stock + " items beschikbaar"
      return;
    } else if (this.product.stock == 1) {
      this.stockText = "Nog slechts " + this.product.stock + " item beschikbaar"
      return;
    }
    this.stockText = "Op Voorraad";
  }

  addProductToShoppingCart() {
    this.orderService.addProductToOrder(this.product);
  }
}
