import { AdminUsersComponent } from './main/account/admin/admin-users/admin-users.component';
import { AdminProductsComponent } from './main/account/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './main/account/admin/admin-orders/admin-orders.component';
import { AdminGuard } from './shared/guards/admin.guard';
import { LoginComponent } from './main/account/login/login.component';
import { PaymentComponent } from './main/webshop/checkout/payment/payment.component';
import { SettingsComponent } from './main/account/settings/settings.component';
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
import { OrdersComponent } from './main/account/settings/orders/orders.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "home", component: HomeComponent },
  { path: "over", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "login", component: LoginComponent },
  {
    path: "account", component: AccountComponent, canActivate: [AuthGuard], children:
      [
        {
          path: "", component: SettingsComponent
        },
        {
          path: "admin", canActivate: [AdminGuard], children: [
            {
              path: "", redirectTo: "bestellingen", pathMatch: "full"
            },
            {
              path: "bestellingen", component: AdminOrdersComponent
            },
            {
              path: "producten", component: AdminProductsComponent
            },
            {
              path: "gebruikers", component: AdminUsersComponent
            }
          ]
        }
      ]
  },
  {
    path: "winkelwagen", component: CheckoutComponent, canActivate: [AuthGuard]
  },
  {
    path: "betaling", component: PaymentComponent, canActivate: [AuthGuard]
  },
  {
    path: "webshop", children:
      [
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
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
