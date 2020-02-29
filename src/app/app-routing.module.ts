import { AuthGuard } from './shared/guards/auth.guard';
import { AccountComponent } from './main/account/account.component';
import { CheckoutComponent } from './main/webshop/checkout/checkout.component';
import { ProductPageComponent } from './main/webshop/product-page/product-page.component';
import { WebshopComponent } from './main/webshop/webshop.component';
import { ContactComponent } from './main/contact/contact.component';
import { AboutComponent } from './main/about/about.component';
import { HomeComponent } from './main/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "home", component: HomeComponent },
  { path: "over", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "account", component: AccountComponent },
  { path: "winkelwagen", component: CheckoutComponent, canActivate: [AuthGuard] },
  {
    path: "webshop", children: [
      {
        path: "", pathMatch: "full", component: WebshopComponent
      },
      {
        path: ":id", component: ProductPageComponent
      }
    ]
  },
  { path: '**', redirectTo: "/home" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
