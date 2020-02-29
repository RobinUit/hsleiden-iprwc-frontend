import { AlertService } from './../../../../shared/services/alert.service';
import { Subscription } from 'rxjs';
import { OrderService } from './../../../../shared/services/order.service';
import { AddressService } from './../../../../shared/services/address.service';
import { Address } from './../../../../shared/models/address.model';
import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';
import { Item } from 'src/app/shared/models/item.model';
import { CheckoutComponent } from '../checkout.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeliveryComponent implements OnInit, OnDestroy {

  @Output() messageEvent = new EventEmitter<string>();
  @Input() order: Order;
  @Input() items: Item[];

  address: Address;
  subscription: Subscription;
  form: FormGroup;

  constructor(
    private parent: CheckoutComponent,
    private addressService: AddressService,
    private orderService: OrderService,
    private alert: AlertService) { }

  ngOnInit() {
    this.buildForm();
    this.loadAddress();
  }

  ngOnChanges() {
    this.order = this.parent.order;
    this.items = this.parent.items;
  }

  buildForm() {
    this.form = new FormGroup({
      contactdetails: new FormGroup({
        firstname: new FormControl(),
        lastname: new FormControl(),
        email: new FormControl(Validators.email),
        phonenumber: new FormControl()
      }, [Validators.required]),
      address: new FormGroup({
        zipcode: new FormControl(),
        housenumber: new FormControl(),
        street: new FormControl({ disabled: true }),
        city: new FormControl({ disabled: true }),
        country: new FormControl({ disabled: true })
      }, Validators.required),
      message: new FormControl()
    })
  }

  getFullAddress() {
    const zipcode = this.form.get('address.zipcode').value as string;
    const housenumber = this.form.get('address.housenumber').value as string;

    if (zipcode == null || zipcode == "" ||
      housenumber == null || housenumber == "") {
      this.resetValues();
      this.disableForm();
      return;
    }

    this.subscription = this.addressService.getAddress(zipcode, housenumber).subscribe((address: Address) => {
      this.form.get('address').patchValue({
        street: address.street,
        city: address.city,
        country: "Nederland",
      })
      this.enableForm();
      this.alert.showAlert("success", "Adres is gevonden en automatisch aangevuld");
    }, () => {
      this.resetValues();
      this.enableForm();
      this.alert.showAlert("warning", "Er is geen adres gevonden bij de opgegven gegevens");
    })
  }

  back() {
    this.saveAddress()
    this.parent.changeCurrentPage("shopping-cart")
  }

  processForm() {
    this.saveAddress()
    this.parent.changeCurrentPage("summary")
  }

  loadAddress() {
    this.form.patchValue({
      contactdetails: {
        firstname: this.order.firstname,
        lastname: this.order.lastname,
        email: this.order.email,
        phonenumber: this.order.phonenumber
      },
      address: {
        zipcode: this.order.zipcode,
        housenumber: this.order.housenumber,
        street: this.order.street,
        city: this.order.city,
        country: this.order.country
      },
      message: this.order.message
    })
    this.getFullAddress();
  }

  saveAddress() {
    this.order.firstname = this.form.get('contactdetails.firstname').value as string;
    this.order.lastname = this.form.get('contactdetails.lastname').value as string;
    this.order.email = this.form.get('contactdetails.email').value as string;
    this.order.phonenumber = this.form.get('contactdetails.phonenumber').value as string;
    this.order.zipcode = this.form.get('address.zipcode').value as string;
    this.order.housenumber = this.form.get('address.housenumber').value as string;
    this.order.street = this.form.get('address.street').value as string;
    this.order.city = this.form.get('address.city').value as string;
    this.order.country = this.form.get('address.country').value as string;
    this.order.message = this.form.get('message').value as string;

    this.orderService.setOrder(this.order);
  }

  disableForm() {
    this.form.get('address.city').disable()
    this.form.get('address.street').disable()
    this.form.get('address.country').disable()
  }

  enableForm() {
    this.form.get('address.city').enable()
    this.form.get('address.street').enable()
    this.form.get('address.country').enable()
  }

  resetValues() {
    this.form.get('address').patchValue({
      street: "",
      city: "",
      country: ""
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
