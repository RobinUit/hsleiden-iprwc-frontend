import { DatabaseUser } from './../models/user.model';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private classURL: string = "/user";
  private params = new HttpParams()

  //Firebase user
  user: Observable<User>;
  userData: User;

  //API user
  databaseUser: Subject<DatabaseUser> = new Subject<DatabaseUser>();
  databaseUserData: DatabaseUser;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private api: ApiService,
  ) {
    this.user = this.afAuth.authState
    this.afAuth.auth.onAuthStateChanged((user: User) => {
      if (user) {
        this.databaseUserData = new DatabaseUser(
          user.uid,
          user.email,
          user.displayName
        )
        this.emitUser(this.databaseUserData);
        this.login(user);
        return;
      }
    })
  }

  private login(user: User) {
    this.params = new HttpParams().set("name", user.displayName);
    this.api.get<DatabaseUser>(this.classURL, this.params).subscribe((databaseUser: DatabaseUser) => {
      this.databaseUserData = databaseUser;
      console.log(databaseUser);
      
      this.emitUser(this.databaseUserData);
    }, () => {
    })
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }

  emitUser(user: DatabaseUser) {
    this.databaseUser.next(user);
  }

  getUser(): Observable<any> {
    return this.databaseUser.asObservable();
  }
}