import { OrderService } from './shared/services/order.service';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { environment } from '../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Back to the Roots';

  location: Location;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.automaticRouteToHTTPS()
    this.orderService.getOrderFromLocalStorage()
  }

  automaticRouteToHTTPS() {
    if (environment.production) {
      if (location.protocol === 'http:') {
        window.location.href = location.href.replace('http', 'https');
      }
    }
  }
}
