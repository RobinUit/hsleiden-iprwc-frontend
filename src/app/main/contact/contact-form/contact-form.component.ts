import { Subscription } from 'rxjs';
import { AuthService } from './../../../shared/services/auth.service';
import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactMail } from 'src/app/shared/models/contactMail.model';
import { EmailService } from 'src/app/shared/services/email.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { User } from 'firebase';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit, OnDestroy {
  @ViewChild('contactForm', { static: true }) contactForm: NgForm;

  name: string;
  email: string;
  message: string;

  succesMessage: string = "Je bericht is met succes verstuurd en je ontvangt zo spoedig mogelijk een reactie!";
  errorMessage: string = "Je bericht is niet juist verstuurd. Probeer het opnieuw of neem contact met ons op via het mailadres op deze pagina."
  subscription: Subscription;

  constructor(private emailService: EmailService, private alert: AlertService, public auth: AuthService) {
  }

  ngOnInit() {
    this.subscription = this.auth.user.subscribe((user: User) => {
      if (user) {
        this.name = user.displayName;
        this.email = user.email;
      }
    })
  }

  public createMail() {
    let mail: ContactMail = this.contactForm.value;
    this.emailService.sendContactMail(mail).subscribe(
      () => {
        this.alert.showAlert("success", this.succesMessage);
        this.contactForm.reset();
      }, () => {
        this.alert.showAlert("failed", this.errorMessage);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
