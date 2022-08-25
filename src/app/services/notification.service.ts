// Angular
import {Injectable} from '@angular/core';
// Libraries
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastrService: ToastrService) {
  }

  public success(message: string,
                 title?: string) {
    this.toastrService.success(
        message,
        title
    );
  }

  public warning(message: string,
                 title?: string) {
    this.toastrService.warning(
        message,
        title
    );
  }

  public error(message: string,
               title?: string) {
    this.toastrService.error(
        message,
        title
    );
  }

}
