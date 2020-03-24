import { User } from 'firebase/app';
import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  photoURL: string = "";

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  getImage(user: User) {
    this.photoURL = user.photoURL;

    if (this.photoURL == null) {
      const emailHash = new Md5().appendStr(user.email.toLowerCase().trim()).end();
      const username = user.displayName.trim().replace(" ", "+");

      const UIavatarsURL =
        "https://eu.ui-avatars.com/api/" + username + "/150/3a6580/fff/2/0.4/true/false/true";

      const gravatarURL =
        "https://www.gravatar.com/avatar/" + emailHash + "?s=500&d=" + encodeURIComponent(UIavatarsURL);

      this.photoURL = gravatarURL;
    }

    return true;
  }
}
