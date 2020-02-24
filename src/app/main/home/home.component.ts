import { AlertService } from './../../shared/services/alert.service';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  product: Product = this.productService.getProductByID(1);

  constructor(
    private router: Router,
    private productService: ProductService,
    private alert: AlertService) { }

  ngOnInit() {
  }

  buyEbook() { 
    this.alert.showAlert("success", "Gelukt!", "Het item is succesvol toegevoegd aan je winkelwagen");
    // this.router.navigate(['/webshop/' + this.product.id]);
  }
}
