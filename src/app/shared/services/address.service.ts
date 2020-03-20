import { Address } from './../models/address.model';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private apiService: ApiService) { }

  getAddress(zipcode: string, housenumber: string) {
    const params = new HttpParams()
      .set("zipcode", zipcode)
      .set("housenumber", housenumber)
       
    return this.apiService.get<Address>('/address', params).pipe(
      map((address: Address) => {
      return address;
    }));
}
}
