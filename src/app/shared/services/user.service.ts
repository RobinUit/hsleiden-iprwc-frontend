import { AlertService } from 'src/app/shared/services/alert.service';
import { DatabaseUser } from './../models/user.model';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private classURL: string = "/user";
  private params = new HttpParams()

  constructor(private api: ApiService, private alert: AlertService) { }

  public getAllUsers() {
    return this.api.get(this.classURL + "/all", this.params).pipe(map((users: DatabaseUser[]) => {
      return users;
    }, (error: any) => {
      return error;
    }))
  }

  public createAdmin(userID: string) {
    return this.api.post(this.classURL + "/admin/" + userID, this.params).pipe(map(
      () => {
        this.alert.showAlert("success", "Admin toegevoegd");
      },
      () => {
        this.alert.showAlert("failed", "Admin niet toegevoegd");
      }
    ))
  }

  public deleteAdmin(userID: string) {
    return this.api.delete(this.classURL + "/admin/" + userID, this.params).pipe(map(
      () => {
        this.alert.showAlert("success", "Admin verwijderd");
      },
      () => {
        this.alert.showAlert("failed", "Admin niet verwijderd");
      }
    ))
  }

  // public changeUsername(user: DatabaseUser) {    
  //   return this.api.post(this.classURL + "/name", user).subscribe(() => {
  //     this.alert.showAlert("success", "Je naam is met succes veranderd");
  //   }, () => {
  //     this.alert.showAlert("failed", "Het is niet gelukt om je naam te veranderen");
  //   })
  // }
}
