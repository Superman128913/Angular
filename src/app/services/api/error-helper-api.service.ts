// Angular
import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
// Application
import {ApiError} from '../../shared/models/api_error.model';

@Injectable({
  providedIn: 'root'
})
export class ErrorHelperApiService {

  constructor() {
  }

  public getError(serverError: HttpErrorResponse) {
    // get error status
    const errorStatus = serverError.status;
    // set error message
    let errorMessage = '';
    if (serverError.error?.error) {
      errorMessage = serverError.error?.error;
    } else if (serverError.error?.errors?.full_messages) {
      errorMessage = serverError.error?.errors?.full_messages;
    } else if (serverError.error?.errors) {
      errorMessage = serverError.error?.errors;
    }

    // set error
    const displayError: ApiError = {
      status: errorStatus,
      message: errorMessage
    };

    // return error
    return displayError;
  }
}
