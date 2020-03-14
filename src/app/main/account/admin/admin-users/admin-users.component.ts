import { Subscription } from 'rxjs';
import { DatabaseUser } from './../../../../shared/models/user.model';
import { UserService } from './../../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {

  users: DatabaseUser[] = new Array;
  admins: DatabaseUser[] = new Array;
  subscription: Subscription;

  constructor(private userService: UserService) { 
    this.subscription = this.userService.getAllUsers().subscribe((users: DatabaseUser[]) => {
      users.forEach((user: DatabaseUser) => {
        if(user.isAdmin) {
          this.admins.push(user);
          return;
        }
        this.users.push(user);
      });
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
