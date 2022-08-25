// Angular
import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
// Libraries
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
// Application
import {LoggerService} from './logger.service';

@Injectable({
    providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

    private fileName = 'InterceptorService';

    constructor(private loggerService: LoggerService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const functionName = 'intercept';

        return next.handle(
            request
        ).pipe(
            retry(1),
            catchError((error: HttpErrorResponse) => {
                // let type = '';
                // let message = '';
                // const title = '';
                //
                // // gather error information
                // if (error.error instanceof ErrorEvent) {
                //     // error type
                //     type = 'error';
                //     // client-side error
                //     message = error.error.message;
                // } else if (error.status === 422) {
                //     // error type
                //     type = 'warning';
                //     // server-side error
                //     // email has already been taken
                //     message = error.error.errors.full_messages + ', please sign in.';
                //     // store email in session storage
                //     this.sessionStorage.store('email', registrationEmail);
                //     // navigate to sign in
                //     this.router.navigate([GlobalConstants.signInPath]).then(() => {
                //     });
                // } else if (error.status === 500) {
                //     // error type
                //     type = 'error';
                //     // server-side error
                //     // email has already been taken
                //     message = 'Congratulations, you broke it! A team of our best engineers have commandeered a ' +
                //         'refurbished Concorde and headed to the cloud to investigate.';
                //     // navigate to sign in
                //     this.router.navigate([GlobalConstants.signInPath]).then(() => {
                //     });
                // } else {
                //     // error type
                //     type = 'error';
                //     // server-side error
                //     message = error.error.errors.full_messages;
                // }
                //
                // // pop toastr message
                // this.notificationService.toasterNotification(type, message, title);
                //
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);
                // throw error
                return throwError(error);
            })
        );
    }

}
