// Angular
import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class EmailDomainCompanyDomainValidator {
    static doesEmailDomainMatchCompanyDomain(email: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const domainControl = control.get('domain');

            // set email domain
            const emailDomain = email.substring(email.indexOf('@') + 1);

            // check if domain and email domain have values
            if (domainControl?.value !== '') {
                // if (domainControl?.value !== '' && emailControl?.value !== '') {
                // check if domain and email domain are mismatched
                if (domainControl?.value === emailDomain) {
                    if (domainControl?.hasError('mismatched')) {
                        domainControl?.setErrors(null);
                    }
                    return null;
                } else {
                    if (domainControl?.value !== '' && domainControl?.errors === null) {
                        domainControl.setErrors({
                            mismatched: true
                        });
                    }
                }
            }
            // must return null for validator to work
            return null;
        };
    }

    static emailRequiredWithCompanyDomain: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
        const domainControl = control.get('domain');
        const emailControl = control.get('email');

        // if there is a domain value require an email
        if (domainControl?.value !== '') {
            // if there is no email value mark it as touched
            if (emailControl?.value === '') {
                emailControl?.markAsTouched();
                emailControl?.setErrors({
                    required: true
                });
            }
        } else {
            // if there is no email value mark it as untouched
            if (emailControl?.value === '') {
                emailControl?.markAsUntouched();
                emailControl?.setErrors(null);
            }
        }

        // if there is a email value require an domain
        if (emailControl?.value !== '') {
            // if there is no domain value mark it as touched
            if (domainControl?.value === '') {
                domainControl?.markAsTouched();
                domainControl?.setErrors({
                    required: true
                });
            }
        } else {
            // if there is no domain value mark it as untouched
            if (domainControl?.value === '') {
                domainControl?.markAsUntouched();
                domainControl?.setErrors(null);
            }
        }
        // must return null for validator to work
        return null;
    };
}
