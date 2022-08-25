import { __decorate } from "tslib";
// Angular
import { Injectable } from '@angular/core';
// Application
import { GlobalConstants } from '../../shared/global-constants';
let UserStorageService = class UserStorageService {
    constructor(localStorage, apiHelperStorageService) {
        this.localStorage = localStorage;
        this.apiHelperStorageService = apiHelperStorageService;
        this.fileName = 'UserStorageService';
    }
    // store user in local storage
    storeUser(object) {
        // set attributes
        const attributes = object.user?.data?.attributes;
        this.localStorage.store(GlobalConstants.userId, object.user?.data?.id);
        this.localStorage.store(GlobalConstants.email, attributes.email);
        this.localStorage.store(GlobalConstants.unconfirmedEmail, attributes.unconfirmedEmail);
        this.localStorage.store(GlobalConstants.confirmed, attributes.confirmed);
        this.localStorage.store(GlobalConstants.firstName, attributes.firstName);
        this.localStorage.store(GlobalConstants.lastName, attributes.lastName);
        this.localStorage.store(GlobalConstants.title, attributes.title);
        this.localStorage.store(GlobalConstants.mobile, attributes.mobile);
        this.localStorage.store(GlobalConstants.work, attributes.work);
        this.localStorage.store(GlobalConstants.profileId, attributes.profileId);
        this.localStorage.store(GlobalConstants.profileImagePath, attributes.profileImagePath);
        // settings
        const userSettings = this.apiHelperStorageService.getUserSettingsFromApi(attributes.settings);
        this.localStorage.store(GlobalConstants.settings, userSettings);
        // roles
        const userRolesApi = attributes.roles;
        const companyUserRoles = [];
        for (const role of userRolesApi) {
            const companyUserRole = this.apiHelperStorageService.getCompanyUserRoleFromApi(role);
            companyUserRoles.push(companyUserRole);
        }
        this.localStorage.store(GlobalConstants.roles, companyUserRoles);
        this.localStorage.store(GlobalConstants.companyId, attributes.companyId);
        this.localStorage.store(GlobalConstants.companyConfirmed, attributes.companyConfirmed);
        // invite
        const companyUserInvite = this.apiHelperStorageService.getCompanyUserInviteFromApi(attributes.invite);
        this.localStorage.store(GlobalConstants.companyUserInvite, companyUserInvite);
        // request
        const companyUserRequest = this.apiHelperStorageService.getCompanyUserRequestFromApi(attributes.request);
        this.localStorage.store(GlobalConstants.companyUserRequest, companyUserRequest);
    }
    storeEmail(email) {
        this.localStorage.store(GlobalConstants.email, email);
    }
    storeDomain(domain) {
        this.localStorage.store(GlobalConstants.domain, domain);
    }
    getUser() {
        // return
        return {
            id: this.localStorage.retrieve(GlobalConstants.userId),
            email: this.localStorage.retrieve(GlobalConstants.email),
            unconfirmedEmail: this.localStorage.retrieve(GlobalConstants.unconfirmedEmail),
            confirmed: this.localStorage.retrieve(GlobalConstants.confirmed),
            firstName: this.localStorage.retrieve(GlobalConstants.firstName),
            lastName: this.localStorage.retrieve(GlobalConstants.lastName),
            title: this.localStorage.retrieve(GlobalConstants.title),
            mobile: this.localStorage.retrieve(GlobalConstants.mobile),
            work: this.localStorage.retrieve(GlobalConstants.work),
            profileId: this.localStorage.retrieve(GlobalConstants.profileId),
            profileImagePath: this.localStorage.retrieve(GlobalConstants.profileImagePath),
            settings: this.localStorage.retrieve(GlobalConstants.settings),
            roles: this.localStorage.retrieve(GlobalConstants.roles),
            companyId: this.localStorage.retrieve(GlobalConstants.companyId),
            companyConfirmed: this.localStorage.retrieve(GlobalConstants.companyConfirmed)
        };
    }
    getUserId() {
        return this.localStorage.retrieve(GlobalConstants.userId);
    }
    getUserEmail() {
        return this.localStorage.retrieve(GlobalConstants.email);
    }
    getUserDomain() {
        return this.localStorage.retrieve(GlobalConstants.domain);
    }
    getUserUnconfirmedEmail() {
        return this.localStorage.retrieve(GlobalConstants.unconfirmedEmail);
    }
    getUserFirstName() {
        return this.localStorage.retrieve(GlobalConstants.firstName);
    }
    getUserLastName() {
        return this.localStorage.retrieve(GlobalConstants.lastName);
    }
    getUserFullName() {
        const firstName = this.localStorage.retrieve(GlobalConstants.firstName);
        const lastName = this.localStorage.retrieve(GlobalConstants.lastName);
        // return
        return firstName + ' ' + lastName;
    }
    getUserTitle() {
        return this.localStorage.retrieve(GlobalConstants.title);
    }
    getUserMobile() {
        return this.localStorage.retrieve(GlobalConstants.mobile);
    }
    getUserWork() {
        return this.localStorage.retrieve(GlobalConstants.work);
    }
    getUserProfileId() {
        return this.localStorage.retrieve(GlobalConstants.profileId);
    }
    getUserProfileImagePath() {
        return this.localStorage.retrieve(GlobalConstants.profileImagePath);
    }
    getUserCompanyUserRoles() {
        return this.localStorage.retrieve(GlobalConstants.roles);
    }
    getUserCompanyInvite() {
        return this.localStorage.retrieve(GlobalConstants.companyUserInvite);
    }
    getUserCompanyRequest() {
        return this.localStorage.retrieve(GlobalConstants.companyUserRequest);
    }
    getUserSettings() {
        return this.localStorage.retrieve(GlobalConstants.settings);
    }
    isUserConfirmed() {
        return this.localStorage.retrieve(GlobalConstants.confirmed);
    }
    // TODO - create a more secure way to check if a user is part of an organization
    isUserInOrganization() {
        // get organization id
        const organizationId = this.getOrganizationId();
        // set return value
        let inOrganization = false;
        // check if user has an organization id
        if (organizationId !== null) {
            inOrganization = true;
        }
        // return in organization
        return inOrganization;
    }
    isUserCompanyConfirmed() {
        return this.localStorage.retrieve(GlobalConstants.companyConfirmed);
    }
    isCurrentUserCompanyAdmin() {
        // get current user
        const userId = this.getUserId();
        // get user company user roles
        const roles = this.getUserCompanyUserRoles();
        // iterate through roles and find user role
        for (const role of roles) {
            if (BigInt(role.userId) === BigInt(userId)) {
                // return role administrator
                return role.administrator;
            }
        }
        // return false if not found
        return false;
    }
    isUserCurrentUser(userId) {
        const currentUserId = this.getUserId();
        // return
        return BigInt(currentUserId) === BigInt(userId);
    }
    isCurrentUserLastCompanyAdmin() {
        const isAdmin = this.isCurrentUserCompanyAdmin();
        let bool;
        if (isAdmin) {
            // get company user roles
            const roles = this.getCompanyUserRoles();
            //
            let count = 0;
            for (const role of roles) {
                if (role.administrator) {
                    count += 1;
                }
            }
            //
            bool = count <= 1;
        }
        else {
            bool = false;
        }
        // return
        return bool;
    }
    isUserCompanyInvitePending(email) {
        // set company user invites
        const companyUserInvite = this.getUserCompanyInvite();
        let invitePending = false;
        if (companyUserInvite) {
            if (companyUserInvite.email === email) {
                invitePending = !companyUserInvite.accepted;
            }
        }
        // return
        return invitePending;
    }
    isUserCompanyRequestPending(userId) {
        // set company user requests
        const companyUserRequest = this.getUserCompanyRequest();
        let requestPending = false;
        if (companyUserRequest) {
            if (BigInt(companyUserRequest.userId) === BigInt(userId)) {
                requestPending = !companyUserRequest.approved;
            }
        }
        // return
        return requestPending;
    }
    /** Private **/
    getOrganizationId() {
        return this.localStorage.retrieve(GlobalConstants.companyId);
    }
    getCompanyUserRoles() {
        return this.localStorage.retrieve(GlobalConstants.companyUserRoles);
    }
};
UserStorageService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserStorageService);
export { UserStorageService };
//# sourceMappingURL=user-storage.service.js.map