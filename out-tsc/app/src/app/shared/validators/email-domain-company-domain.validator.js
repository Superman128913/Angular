export class EmailDomainCompanyDomainValidator {
    static doesEmailDomainMatchCompanyDomain(email) {
        return (control) => {
            const domainControl = control.get('domain');
            // set email domain
            const emailDomain = email.substring(email.indexOf('@') + 1);
            // check if domain and email domain have values
            if ((domainControl === null || domainControl === void 0 ? void 0 : domainControl.value) !== '') {
                // if (domainControl?.value !== '' && emailControl?.value !== '') {
                // check if domain and email domain are mismatched
                if ((domainControl === null || domainControl === void 0 ? void 0 : domainControl.value) === emailDomain) {
                    if (domainControl === null || domainControl === void 0 ? void 0 : domainControl.hasError('mismatched')) {
                        domainControl === null || domainControl === void 0 ? void 0 : domainControl.setErrors(null);
                    }
                    return null;
                }
                else {
                    if ((domainControl === null || domainControl === void 0 ? void 0 : domainControl.value) !== '' && (domainControl === null || domainControl === void 0 ? void 0 : domainControl.errors) === null) {
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
}
EmailDomainCompanyDomainValidator.emailRequiredWithCompanyDomain = (control) => {
    const domainControl = control.get('domain');
    const emailControl = control.get('email');
    // if there is a domain value require an email
    if ((domainControl === null || domainControl === void 0 ? void 0 : domainControl.value) !== '') {
        // if there is no email value mark it as touched
        if ((emailControl === null || emailControl === void 0 ? void 0 : emailControl.value) === '') {
            emailControl === null || emailControl === void 0 ? void 0 : emailControl.markAsTouched();
            emailControl === null || emailControl === void 0 ? void 0 : emailControl.setErrors({
                required: true
            });
        }
    }
    else {
        // if there is no email value mark it as untouched
        if ((emailControl === null || emailControl === void 0 ? void 0 : emailControl.value) === '') {
            emailControl === null || emailControl === void 0 ? void 0 : emailControl.markAsUntouched();
            emailControl === null || emailControl === void 0 ? void 0 : emailControl.setErrors(null);
        }
    }
    // if there is a email value require an domain
    if ((emailControl === null || emailControl === void 0 ? void 0 : emailControl.value) !== '') {
        // if there is no domain value mark it as touched
        if ((domainControl === null || domainControl === void 0 ? void 0 : domainControl.value) === '') {
            domainControl === null || domainControl === void 0 ? void 0 : domainControl.markAsTouched();
            domainControl === null || domainControl === void 0 ? void 0 : domainControl.setErrors({
                required: true
            });
        }
    }
    else {
        // if there is no domain value mark it as untouched
        if ((domainControl === null || domainControl === void 0 ? void 0 : domainControl.value) === '') {
            domainControl === null || domainControl === void 0 ? void 0 : domainControl.markAsUntouched();
            domainControl === null || domainControl === void 0 ? void 0 : domainControl.setErrors(null);
        }
    }
    // must return null for validator to work
    return null;
};
//# sourceMappingURL=email-domain-company-domain.validator.js.map