// Company User Invite Models
// name?: type = OPTIONAL
export interface CompanyUserInvite {
    id: bigint;
    userId: bigint;
    companyId: bigint;
    email: string;
    invitedByUserId: bigint;
    accepted: boolean;
}

export interface CompanyUserInviteCreateForm {
    email: string;
    administrator: boolean;
    companyId: bigint;
}

export interface CompanyUserInviteAcceptForm {
    acceptanceToken: string;
}

export interface CompanyUserInviteRejectForm {
    userId: bigint;
    acceptanceToken: string;
}

export interface CompanyUserInviteResendForm {
    email: string;
}
