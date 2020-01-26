import { CarouselDirective } from './../../../shared/directives/carousel.directive';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Animations } from 'src/app/app.animations';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss'],
  animations: [
    Animations.enterAnimation,
    Animations.progressBarAnimation,
    Animations.fade
  ]
})
export class RatingsComponent implements OnInit {
  @ViewChild(CarouselDirective, { static: false }) controller;

  ratings = [
    {
      review: "Het boek ‘Back to the Roots’ heeft ervoor gezorgd dat ik de culturen in Nederland beter begrijp. Hierdoor kan ik mij beter inleven in andere mensen. Buiten dat ik veel geleerd heb van de interviews, zijn de gerechten die erin staan ook een fijne inspiratie. Ik probeer nu eens in de zoveel tijd een nieuwe keuken uit en heb al een hoop nieuwe smaken leren kennen.",
      author: "Lana",
      rating: "4,5"
    },
    {
      review: "Sinds ik het boek van ‘Back to the Roots’ gelezen heb sta ik veel vaker in de keuken. Doordat de gerechten gemaakt en beschreven zijn door de culturen vind ik dit boek fijner dan andere kookboeken. Ik heb echt het gevoel dat de culturen zelf weten wat de lekkerste bereidingswijze van hun gerecht is. De recepten zijn makkelijk te maken doordat er ingrediënten bij staan die gewoon in de Nederlandse supermarkten te koop zijn.",
      author: "Vincent",
      rating: "5"
    },
    {
      review: "Een paar jaar geleden ben ik vanuit Pakistan naar Nederland gevlucht. Ik heb hier in Nederland veel verschillende mensen ontmoet met allemaal andere culturele achtergronden. Iedereen heeft andere normen en waarden. Wat ik zo fijn vind aan dit boek is dat ik meer kan leren over andere culturen op mijn eigen tempo. Ook de muziek en de gerechten laten mij andere culturen ervaren waar ik erg veel van leer.",
      author: "Ginhwa",
      rating: "5"
    },
    {
      review: "Samen met mijn vrouw en kinderen heb ik al een aantal gerechten uit dit boek gemaakt. Heel leuk hoe je tijdens het maken van het gerecht met de QR-code een afspeellijst kan aanzetten met bijpassende muziek. Mijn kinderen vinden vooral de Antilliaanse pannenkoeken heerlijk. Ik weet de volgende vakantiebestemmig dus al.. Ik hou mij aanbevolen voor eventuele vervolgboeken die meer over Curaçao gaan.",
      author: "Max",
      rating: "4,5"
    },
    {
      review: "Heel leuk om als cadeau te geven aan iemand anders, of om stiekem aan jezelf cadeau te geven. De service was perfect. Het boek was snel binnen en is van goede kwaliteit. Ik heb het zelf nog niet gelezen, dus over de inhoud kan ik nog niks zeggen. Zodra mijn moeder het boek uit heeft ga ik het zeker lenen. Keep up the good work Back to the Roots!",
      author: "Tanja",
      rating: "5"
    },

  ]

  interval: any;
  isStarted: boolean = false;
  nextSlide: boolean = false;
  isFocussed: boolean = false;

  constructor() { }

  ngOnInit() {
    this.startInterval();
    this.isStarted = true;
    this.nextSlide = true;
  }

  nextPage() {
    this.changePageAnimation();
    setTimeout(() => {
      this.resetInterval();
      this.controller.next();
    }, 500)
    this.isStarted = false;
  }

  previousPage() {
    this.changePageAnimation();
    setTimeout(() => {
      this.resetInterval();
      this.controller.prev();
    }, 500)
    this.isStarted = false;
  }

  focussed() {
    this.isFocussed = true;
    document.getElementById("rating").style.transform = 'scale(1.05)';
    this.stopInterval();
  }

  unfocussed() {
    this.isFocussed = false;
    document.getElementById("rating").style.transform = 'scale(1)';
    this.startInterval();
  }

  startInterval() {
    setTimeout(() => {
      this.isStarted = true;
      this.interval = setInterval(() => {
        this.nextPage();
      }, 10000);
    }, 0)
  }

  stopInterval() {
    clearInterval(this.interval);
  }

  resetInterval() {
    this.stopInterval();
    if (!this.isFocussed) {
      console.log("Test");
      this.startInterval();
    }
  }

  checkIfFocussed() {
    if (this.isFocussed) {
      this.unfocussed();
    }
  }

  changePageAnimation() {
    this.nextSlide = false;
    setTimeout(() => {
      this.nextSlide = true;
    }, 1000)
  }
}
