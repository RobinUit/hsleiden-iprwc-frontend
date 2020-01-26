import { Animations } from './../../app.animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    Animations.enterAnimation
  ]
})
export class HeaderComponent implements OnInit {
  mobileNavIsOpened: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleCheck() {
    this.mobileNavIsOpened = !this.mobileNavIsOpened;    
  }

}
