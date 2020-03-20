import { AuthService } from 'src/app/shared/services/auth.service';
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
  isLoading: boolean = false;

  searchText: string;
  filterRows: string[] = ["id", "email"];

  subscription: Subscription;

  constructor(private userService: UserService, public auth: AuthService) { 
    this.getAllUsers();
  }

  ngOnInit(): void {
  }

  getAllUsers() {
    this.isLoading = true;
    this.users.length = 0;
    this.admins.length = 0;
    this.subscription = this.userService.getAllUsers().subscribe((users: DatabaseUser[]) => {
      users.forEach((user: DatabaseUser) => {
        if(user.isAdmin) {
          this.admins.push(user);
          return;
        }
        this.users.push(user);
      });
      this.isLoading = false;
    })
  }

  createAdmin(userID: string) {
    this.userService.createAdmin(userID).subscribe(
      () => {
        this.getAllUsers();
        this.isLoading = false;
      },
      () => {}
    );
  }

  deleteAdmin(userID: string) {
    this.userService.deleteAdmin(userID).subscribe(
      () => {
        this.getAllUsers();
        this.isLoading = false;
      },
      () => {}
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
