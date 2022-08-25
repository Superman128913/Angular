export class EmailsValidator {
}
EmailsValidator.checkIfUnique = (control) => {
    const emailsControl = control.get('emails');
    console.log('emailsControl: ', emailsControl);
    for (const value of emailsControl === null || emailsControl === void 0 ? void 0 : emailsControl.value) {
        console.log('email: ', value.email);
        if (emailsControl === null || emailsControl === void 0 ? void 0 : emailsControl.value.includes(value)) {
            //     // const index = emailsControl?.value.indexOf(value);
            console.log('2: ', 2);
            //
            //     // emailsControl.setErrors({
            //     //     duplicate: true
            //     // });
        }
    }
    // must return null for validator to work
    return null;
};
//# sourceMappingURL=emails.validator.js.map