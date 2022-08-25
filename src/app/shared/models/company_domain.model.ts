// Company Domain Models
// name?: type = OPTIONAL

export class CompanyDomain implements CompanyDomainAPI {
    id?: bigint;
    domain: string;
    confirmed: boolean;
    unconfirmedDomain: string;
    confirmedByUserId?: bigint;
    added?: boolean;

    constructor() {
    }
}

interface CompanyDomainAPI {
    id?: bigint;
    domain: string;
    unconfirmedDomain: string;
    confirmed: boolean;
    confirmedByUserId?: bigint;
    added?: boolean;
}

export interface CompanyDomainRegisterForm {
    unconfirmedDomain: string;
    companyId: bigint;
}

export interface CompanyDomainDeleteForm {
    id: bigint;
}

export interface CompanyDomainConfirmForm {
    confirmationToken: string;
}

export interface CompanyDomainResendConfirmationForm {
    unconfirmedDomain: string;
}
