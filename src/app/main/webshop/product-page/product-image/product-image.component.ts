import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss']
})
export class ProductImageComponent implements OnInit {

  @Input() product: Product;
  index: number = 1;
  imageUrl: string;
  loop = true;

  constructor() { }

  ngOnInit() {    
    if (this.product.totalImages != 1) {
      document.getElementById('actions').style.display = 'flex';
    } 
    this.loadImage();
  }

  loadImage() {
    this.imageUrl = "assets/images/products/" + this.product.id + "/" + this.index + ".png";
  }

  nextImage() {
    if (this.index === this.product.totalImages) {
      this.index = 1;
    } else if (this.product.totalImages === 0) {
      return;
    } else {
      this.index++;
    }
    this.loadImage();
  }

  previousImage() {
    if (this.index === 1) {
      this.index = this.product.totalImages;
    } else if (this.product.totalImages === 0) {
      return;
    }
    else {
      this.index--;
    }
    this.loadImage();
  }
}
