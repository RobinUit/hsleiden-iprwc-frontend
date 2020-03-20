import { Animations } from 'src/app/app.animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [Animations.pageAnimation]
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
