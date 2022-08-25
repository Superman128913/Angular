// API Errors Models
// name?: type = OPTIONAL
import {HttpErrorResponse} from '@angular/common/http';
import {Company} from './company.model';

export interface ApiError {
    status: number;
    message: string;
}

export interface CompanyApiError extends HttpErrorResponse {
    status: number;
    message: string;
    company?: Company;
}
