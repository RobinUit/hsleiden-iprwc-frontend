import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  message: string;

  constructor(private alert: ToastrService) { }

  public showAlert(type: string, message: string) {
    this.message = message;

    switch(type) {
      case "success":
        this.showSuccess();
        break;
      case "failed":
        this.showFailed();
        break;
      case "warning":
        this.showWarning();
        break;
      default:
        this.showInformation();
    }
  }

  private showSuccess() {
    this.alert.success(this.message, "Gelukt!")
  }

  private showFailed() {
    this.alert.error(this.message, "Er is iets fout gegaan!", {
      disableTimeOut: true,
      closeButton: true
    })
  }

  private showWarning() {
    this.alert.warning(this.message, "Let op!")
  } 

  private showInformation() {
    this.alert.info(this.message, "Info")
  }
}
