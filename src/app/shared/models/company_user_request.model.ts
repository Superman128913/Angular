// Company User Request Models
// name?: type = OPTIONAL
export interface CompanyUserRequest {
    id: bigint;
    userId: bigint;
    companyId: bigint;
    email: string;
    accepted: boolean;
    acceptedByUserId: bigint;
}

export interface CompanyUserRequestCreateForm {
    domain: string;
}

export interface CompanyUserRequestAcceptForm {
    acceptanceToken: string;
}

export interface CompanyUserRequestRejectForm {
    acceptanceToken: string;
}

export interface CompanyUserRequestResendForm {
}
