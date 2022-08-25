import { __decorate } from "tslib";
// Angular
import { Injectable } from '@angular/core';
// Application
import { GlobalConstants } from '../../shared/global-constants';
let CompanyStorageService = class CompanyStorageService {
    constructor(localStorage, apiHelperStorageService) {
        this.localStorage = localStorage;
        this.apiHelperStorageService = apiHelperStorageService;
        this.fileName = 'CompanyStorageService';
    }
    /**
     * Company
     **/
    // store company in local storage
    storeCompany(object) {
        var _a, _b;
        // set attributes
        const attributes = (_b = (_a = object.company) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.attributes;
        this.localStorage.store(GlobalConstants.companyId, attributes.id);
        // divisions
        const companyDivisionsApi = attributes.divisions;
        const companyDivisions = [];
        for (const division of companyDivisionsApi) {
            const companyDivision = this.apiHelperStorageService.getCompanyDivisionFromApi(division);
            companyDivisions.push(companyDivision);
        }
        this.localStorage.store(GlobalConstants.companyDivisions, companyDivisions);
        // domains
        const companyDomainsApi = attributes.domains;
        const companyDomains = [];
        for (const domain of companyDomainsApi) {
            const companyDomain = this.apiHelperStorageService.getCompanyDomainFromApi(domain);
            companyDomains.push(companyDomain);
        }
        this.localStorage.store(GlobalConstants.companyDomains, companyDomains);
        // users
        const companyUsersApi = attributes.users;
        const companyUsers = [];
        for (const user of companyUsersApi) {
            const companyUser = this.apiHelperStorageService.getCompanyUserFromApi(user);
            companyUsers.push(companyUser);
        }
        this.localStorage.store(GlobalConstants.companyUsers, companyUsers);
        // roles
        const userRolesApi = attributes.roles;
        const companyUserRoles = [];
        for (const role of userRolesApi) {
            const companyUserRole = this.apiHelperStorageService.getCompanyUserRoleFromApi(role);
            companyUserRoles.push(companyUserRole);
        }
        this.localStorage.store(GlobalConstants.companyUserRoles, companyUserRoles);
        // invites
        const companyUserInvitesApi = attributes.invites;
        const companyUserInvites = [];
        for (const invite of companyUserInvitesApi) {
            const companyUserInvite = this.apiHelperStorageService.getCompanyUserInviteFromApi(invite);
            companyUserInvites.push(companyUserInvite);
        }
        this.localStorage.store(GlobalConstants.companyUserInvites, companyUserInvites);
        // requests
        const companyUserRequestsApi = attributes.requests;
        const companyUserRequests = [];
        for (const request of companyUserRequestsApi) {
            const companyUserRequest = this.apiHelperStorageService.getCompanyUserRequestFromApi(request);
            companyUserRequests.push(companyUserRequest);
        }
        this.localStorage.store(GlobalConstants.companyUserRequests, companyUserRequests);
    }
    // clear company in local storage
    clearCompany() {
        this.localStorage.clear(GlobalConstants.companyId);
        this.localStorage.clear(GlobalConstants.companyDivisions);
        this.localStorage.clear(GlobalConstants.companyDomains);
        this.localStorage.clear(GlobalConstants.companyUsers);
        this.localStorage.clear(GlobalConstants.companyUserRoles);
    }
    getCompanyId() {
        return this.localStorage.retrieve(GlobalConstants.companyId);
    }
    /**
     * Company Division
     **/
    getCompanyDivisionNames() {
        const companyDivisions = this.localStorage.retrieve(GlobalConstants.companyDivisions);
        const companyDivisionNames = [];
        if (companyDivisions.count === 1) {
            companyDivisionNames.push(companyDivisions.first.name);
        }
        else {
            for (const companyDivision of companyDivisions) {
                companyDivisionNames.push(companyDivision.name);
            }
        }
        // return
        return companyDivisionNames;
    }
    getCompanyDivisions() {
        // set
        const companyDivisions = this.localStorage.retrieve(GlobalConstants.companyDivisions);
        // return
        return companyDivisions;
    }
    getCompanyDivisionById(companyDivisionId) {
        // set company divisions
        const companyDivisions = this.getCompanyDivisions();
        let companyDivision = null;
        if (companyDivisions) {
            for (const division of companyDivisions) {
                if (BigInt(division.id) === BigInt(companyDivisionId)) {
                    companyDivision = division;
                }
            }
        }
        // return
        return companyDivision;
    }
    getCompanyDivisionNameByTraceabilityId(traceabilityId) {
        // set company divisions
        const companyDivisions = this.getCompanyDivisions();
        let companyDivisionName = null;
        if (companyDivisions) {
            for (const companyDivision of companyDivisions) {
                if (companyDivision.traceability.id === traceabilityId) {
                    companyDivisionName = companyDivision.name;
                }
            }
        }
        // return
        return companyDivisionName;
    }
    getTraceabilityIdByCompanyDivisionName(name) {
        // set company divisions
        const companyDivisions = this.getCompanyDivisions();
        let traceabilityId = null;
        if (companyDivisions) {
            for (const companyDivision of companyDivisions) {
                if (companyDivision.name === name) {
                    const id = companyDivision.traceability.id;
                    traceabilityId = id;
                }
            }
        }
        // return
        return traceabilityId;
    }
    getCompanyDivisionNameByFileShareId(fileShareId) {
        // set company divisions
        const companyDivisions = this.getCompanyDivisions();
        let companyDivisionName = null;
        if (companyDivisions) {
            for (const companyDivision of companyDivisions) {
                if (companyDivision.fileShare.id === fileShareId) {
                    companyDivisionName = companyDivision.name;
                }
            }
        }
        // return
        return companyDivisionName;
    }
    getFileShareIdByCompanyDivisionName(name) {
        // set company divisions
        const companyDivisions = this.getCompanyDivisions();
        let fileShareId = null;
        if (companyDivisions) {
            for (const companyDivision of companyDivisions) {
                if (companyDivision.name === name) {
                    const id = companyDivision.fileShare.id;
                    fileShareId = id;
                }
            }
        }
        // return
        return fileShareId;
    }
    /**
     * Company Division Address
     **/
    getCompanyDivisionAddressesByCompanyDivisionId(companyDivisionId) {
        // set company division
        const companyDivision = this.getCompanyDivisionById(companyDivisionId);
        // set company division address
        const companyDivisionAddresses = companyDivision.addresses;
        // return company division addresses
        return companyDivisionAddresses;
    }
    getCompanyDivisionAddressById(companyDivisionAddressId) {
        // set company divisions
        const companyDivisions = this.getCompanyDivisions();
        let companyDivisionAddress = null;
        if (companyDivisions) {
            for (const division of companyDivisions) {
                if (division.addresses) {
                    for (const address of division.addresses) {
                        if (BigInt(address.id) === BigInt(companyDivisionAddressId)) {
                            companyDivisionAddress = address;
                        }
                    }
                }
            }
        }
        // return
        return companyDivisionAddress;
    }
    /**
     * Company Domain
     **/
    getCompanyDomains() {
        return this.localStorage.retrieve(GlobalConstants.companyDomains);
    }
    /**
     * Company User
     **/
    getCompanyUsers() {
        return this.localStorage.retrieve(GlobalConstants.companyUsers);
    }
    getCompanyUserInvites() {
        return this.localStorage.retrieve(GlobalConstants.companyUserInvites);
    }
    getCompanyUserRequests() {
        return this.localStorage.retrieve(GlobalConstants.companyUserRequests);
    }
    getCompanyUserById(companyUserId) {
        // set company users
        const companyUsers = this.getCompanyUsers();
        let companyUser = null;
        if (companyUsers) {
            for (const user of companyUsers) {
                if (BigInt(user.id) === BigInt(companyUserId)) {
                    companyUser = user;
                }
            }
        }
        // return
        return companyUser;
    }
    isCompanyUserInvitePending(userId) {
        // set company user invites
        const companyUserInvites = this.getCompanyUserInvites();
        let invitePending = false;
        if (companyUserInvites) {
            for (const invite of companyUserInvites) {
                if (BigInt(invite.userId) === BigInt(userId)) {
                    invitePending = !invite.accepted;
                }
            }
        }
        // return
        return invitePending;
    }
    isCompanyUserRequestPending(userId) {
        // set company user requests
        const companyUserRequests = this.getCompanyUserRequests();
        let requestPending = false;
        if (companyUserRequests) {
            for (const request of companyUserRequests) {
                if (request.userId === userId) {
                    requestPending = !request.approved;
                }
            }
        }
        // return
        return requestPending;
    }
};
CompanyStorageService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CompanyStorageService);
export { CompanyStorageService };
//# sourceMappingURL=company-storage.service.js.map