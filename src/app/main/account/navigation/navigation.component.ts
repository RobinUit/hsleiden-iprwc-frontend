import { Observable } from 'rxjs';
import { DatabaseUser } from './../../../shared/models/user.model';
import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  timeout:any = null;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {}

  openDropdown() {   
    window.clearTimeout(this.timeout)
    this.timeout = window.setTimeout(() => {
      document.getElementById('dropdownList').style.overflow = "visible"; 
    }, 500)
  }

  closeDropdown() {
    window.clearTimeout(this.timeout)
    document.getElementById('dropdownList').style.overflow = "hidden";
  }
}
