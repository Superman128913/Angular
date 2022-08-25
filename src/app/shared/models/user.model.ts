// User Models
// name?: type = OPTIONAL
export class User implements UserApi, UserProfileApi, UserSettingsApi {
    id?: bigint;
    email: string;
    unconfirmedEmail: string;
    confirmed: boolean;
    roles?: Array<any>;
    companyId?: bigint;
    companyConfirmed?: boolean;
    firstName?: string;
    lastName?: string;
    title?: string;
    mobile?: string;
    work?: string;
    profileId?: bigint;
    profileImagePath?: string;
    settings?: {
        id: bigint;
        defaultTraceabilityId: bigint;
        defaultFileShareId: bigint;
    };

    constructor() {
    }
}

interface UserApi {
    id?: bigint;
    email: string;
    unconfirmedEmail: string;
    confirmed: boolean;
    roles?: Array<any>;
    companyId?: bigint;
    companyConfirmed?: boolean;
}

interface UserProfileApi {
    firstName?: string;
    lastName?: string;
    title?: string;
    mobile?: string;
    work?: string;
    profileId?: bigint;
    profileImagePath?: string;
}

export class UserSettings {
    id: bigint;
    defaultTraceabilityId: bigint;
    defaultFileShareId: bigint;
}

interface UserSettingsApi {
    settings?: {
        id: bigint;
        defaultTraceabilityId: bigint;
        defaultFileShareId: bigint;
    };
}

export interface UserApiSuccessResponse {
    user?: { data };
    company?: { data };
    message: string;
    status: string;
}

// export interface UserApiErrorResponse {
//     success: string;
//     errors: [];
// }

export interface UserChangePasswordForm {
    id: bigint;
    password: string;
    passwordConfirmation: string;
}

export interface UserProfileForm {
    id: bigint;
    firstName: string;
    lastName: string;
    title: string;
    email: string;
    mobile: string;
    work: string;
}

export interface UserSettingsForm {
    defaultTraceabilityId?: bigint;
    defaultFileShareId?: bigint;
}

export interface UserRegistrationForm {
    email: string;
    password: string;
}

export interface UserResetPasswordForm {
    email: string;
}

export interface UserSignInForm {
    email: string;
    password: string;
    userType: string;
}

export interface UserResendConfirmationForm {
    email: string;
}

export interface UserOTPRequirementForm {
    email: string;
    password?: string;
}
