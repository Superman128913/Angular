// Company Models
// name?: type = OPTIONAL
export class Company implements CompanyAPI {
    id: bigint;
    name: string;
    domain: string;

    constructor() {
    }
}

interface CompanyAPI {
    id: bigint;
    name: string;
    domain: string;
}

export interface CompanyApiSuccessResponse {
    user?: { data };
    company?: { data };
    message: string;
    status: string;
}

export interface CompanyRegistrationForm {
    name: string;
    domain?: string;
}

export interface CompanySettingsForm {
}
