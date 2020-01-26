import { MatExpansionModule } from '@angular/material/expansion';
import { HammerJSConfig } from './shared/HammerJSConfig';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './main/about/about.component';
import { WebshopComponent } from './main/webshop/webshop.component';
import { ContactComponent } from './main/contact/contact.component';
import { HomeComponent } from './main/home/home.component';
import { ContentComponent } from './shared/content/content.component';
import { ContactFormComponent } from './main/contact/contact-form/contact-form.component';
import { ContactDetailsComponent } from './main/contact/contact-details/contact-details.component';
import { ItemCardComponent } from './main/webshop/item-card/item-card.component';
import { ProductPageComponent } from './main/webshop/product-page/product-page.component';
import { ProductDetailsComponent } from './main/webshop/product-page/product-details/product-details.component';
import { ProductImageComponent } from './main/webshop/product-page/product-image/product-image.component';
import { ProductPriceComponent } from './main/webshop/product-page/product-price/product-price.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackToTopComponent } from './shared/back-to-top/back-to-top.component';
import { RatingsComponent } from './main/home/ratings/ratings.component';
import { CarouselDirective } from './shared/directives/carousel.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    WebshopComponent,
    ContactComponent,
    HomeComponent,
    ContentComponent,
    ContactFormComponent,
    ContactDetailsComponent,
    ItemCardComponent,
    ProductPageComponent,
    ProductDetailsComponent,
    ProductImageComponent,
    ProductPriceComponent,
    BackToTopComponent,
    RatingsComponent,
    CarouselDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatExpansionModule,
   ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerJSConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
