import { DatabaseUser } from './../../../shared/models/user.model';
import { AuthService } from './../../../shared/services/auth.service';
import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  form: FormGroup;
  user: DatabaseUser;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.user = this.auth.databaseUserData;

    this.buildForm()
    this.form.patchValue({
      firstname: this.user.firstname,
      lastname: this.user.lastname
    })
  }

  buildForm() {
    this.form = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
    }, [Validators.required])
  }
}
