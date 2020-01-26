import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @ViewChild('contactForm', { static: true }) contactForm: NgForm;

  name: string;
  email: string;
  message: string;

  succesMessage: string = "Je bericht is met succes ontvangen en je ontvangt zo spoedig mogelijk een reactie!";
  errorMessage: string = "Je bericht is niet juist verstuurd. Probeer het opnieuw of neem direct contact met ons op via het mailadres op deze pagina."

  constructor() { }

  ngOnInit() {
  }

  public processForm() {
    this.createMail()
    this.contactForm.reset();
  }

  private createMail() {
    var mail = document.createElement("a");
    mail.href = "mailto:info@backtotheroots2020.nl" +
      "?subject=Contactformulier Back to the Roots" +
      "&body=" +
      "Naam: " + this.name + "%0D%0A%0D%0A" +
      "E-mail: " + this.email + "%0D%0A%0D%0A" +
      "Bericht: %0D%0A" + this.message;
    mail.click();
  }

}
