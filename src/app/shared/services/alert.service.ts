import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  message: string;
  title: string;

  constructor(private alert: ToastrService) { }

  public showAlert(type: string, message: string, title?: string) {
    this.message = message;
    this.title = title;

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
    this.alert.success(this.message, this.title)
  }

  private showFailed() {
    this.alert.error(this.message, this.title)
  }

  private showWarning() {
    this.alert.warning(this.message, this.title)
  } 

  private showInformation() {
    this.alert.info(this.message, this.title)
  }
}
