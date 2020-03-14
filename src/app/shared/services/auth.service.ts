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
    private api: ApiService
  ) {
    this.user = this.afAuth.authState
    this.afAuth.auth.useDeviceLanguage();
    this.afAuth.auth.onAuthStateChanged((user: User) => {
      if (user) {
        this.databaseUserData = new DatabaseUser(
          user.uid,
          user.email,
          user.displayName.substr(0, user.displayName.indexOf(' ')).trim(),
          user.displayName.substr(user.displayName.indexOf(' ') + 1).trim()
        )
        this.emitUser(this.databaseUserData);
        this.login(user);
        return;
      }
    })
  }

  private login(user: User) {
    this.api.get<DatabaseUser>(this.classURL + "/" + user.uid, this.params).subscribe((databaseUser: DatabaseUser) => {
      this.databaseUserData = new DatabaseUser(
        databaseUser.id,
        databaseUser.email,
        databaseUser.firstname,
        databaseUser.lastname,
        databaseUser.isAdmin
      ); 
      this.emitUser(this.databaseUserData);
    }, () => {
      this.addUserToDatabase();
    })
  }

  private addUserToDatabase() {
    this.api.post<DatabaseUser>(this.classURL, this.databaseUserData).subscribe(
      () => { }, () => { }
    )
  }

  public isAdmin(): boolean {
    this.afAuth.auth.currentUser.getIdTokenResult()
      .then((idTokenResult) => {
        if (!!idTokenResult.claims.admin) {
          return true;
        } else {
          return false;
        }
      })
      .catch((error) => {
        console.log(error);
      })
    return false;
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