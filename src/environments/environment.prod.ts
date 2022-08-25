import {NgxLoggerLevel} from 'ngx-logger';

export const environment = {
    production: true,
    apiUrl: 'https://www.aeroplicity.com/api/v1/',
    logLevel: NgxLoggerLevel.OFF,
    serverLogLevel: NgxLoggerLevel.ERROR
};
