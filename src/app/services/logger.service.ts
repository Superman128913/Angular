// Angular
import {Injectable} from '@angular/core';
// Libraries
import {NGXLogger} from 'ngx-logger';

@Injectable({
    providedIn: 'root'
})
export class LoggerService {

    constructor(private logger: NGXLogger) {
    }

    public debug(fileName: string,
                 functionName: string,
                 title: string,
                 message: any) {
        this.logger.debug(fileName, functionName, title, message);
    }

    public info(fileName: string,
                functionName: string,
                title: string,
                message: any) {
        this.logger.info(fileName, functionName, title, message);
    }

    public warn(fileName: string,
                functionName: string,
                title: string,
                message: any) {
        this.logger.warn(fileName, functionName, title, message);
    }

    public error(fileName: string,
                 functionName: string,
                 title: string,
                 message: any) {
        this.logger.error(fileName, functionName, title, message);
    }

}
