import { DatabaseUser } from './../models/user.model';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private classURL: string = "/user";
  private params = new HttpParams()

  user$: Observable<User>;
  user: User;
  userData: DatabaseUser;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private api: ApiService
  ) {
    this.user$ = this.afAuth.authState
    this.afAuth.auth.onAuthStateChanged((user: User) => {
      console.log(user);

      if (user) {
        this.userData = new DatabaseUser(user.uid, user.email);
        this.login();
        return;
      }
    })
  }

  private login() {
    this.api.get<DatabaseUser>(this.classURL + "/" + this.userData.id, this.params).subscribe((user: DatabaseUser) => {
      this.userData = user
    }, () => {
      this.addUserToDatabase();
    })
  }

  private addUserToDatabase() {
    this.api.post<DatabaseUser>(this.classURL, this.userData).subscribe(
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
    this.router.navigate(['/account']);
  }

}