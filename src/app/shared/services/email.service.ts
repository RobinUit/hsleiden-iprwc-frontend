import { ContactMail } from './../models/contactMail.model';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private classURL: string;

  constructor(private apiService: ApiService) { }

  sendContactMail(mail: ContactMail) {
    return this.apiService.post<ContactMail>('/mail', mail).pipe(
      map(() => {}));
  }
}
