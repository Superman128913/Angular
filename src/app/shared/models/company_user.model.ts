// Company User Models
// name?: type = OPTIONAL
export class CompanyUser implements CompanyUserAPI {
    id: bigint;
    email: string;
    companyConfirmed?: string;
    roles?: CompanyUserRole[];
    firstName?: string;
    lastName?: string;
    companyId: bigint;

    constructor() {
    }
}

interface CompanyUserAPI {
    id: bigint;
    email: string;
    companyConfirmed?: string;
    roles?: CompanyUserRole[];
    firstName?: string;
    lastName?: string;
    companyId: bigint;
}

export interface CompanyUserRole {
    id: bigint;
    administrator: boolean;
    userId: bigint;
    companyId: bigint;
}
