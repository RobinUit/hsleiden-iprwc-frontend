import { UserService } from './../../shared/services/user.service';
import { DatabaseUser } from './../../shared/models/user.model';
import { AuthService } from './../../shared/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  admin: boolean = false;

  constructor(public auth: AuthService, private userService: UserService) {
    this.auth.databaseUser.subscribe((databaseUserData: DatabaseUser) => {      
      this.admin = !!databaseUserData.isAdmin;
    })
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((databaseUsers: DatabaseUser[]) => {
      console.log(databaseUsers);
    })
  }
}
