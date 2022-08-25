import { __decorate } from "tslib";
// Angular
import { Injectable } from '@angular/core';
let ApiHelperStorageService = class ApiHelperStorageService {
    constructor() {
    }
    /**
     * User
     **/
    getUserSettingsFromApi(userSettingsApi) {
        // set attributes
        const attributes = userSettingsApi.data?.attributes;
        let userSettings = null;
        if (attributes) {
            // set user settings
            userSettings = {
                id: attributes.id,
                defaultTraceabilityId: attributes.defaultTraceabilityId,
                defaultFileShareId: attributes.defaultFileShareId
            };
        }
        // return user settings
        return userSettings;
    }
    /**
     * Company
     **/
    getCompanyDivisionFromApi(companyDivisionApi) {
        const companyDivisionAddressesApi = companyDivisionApi.data.attributes.addresses;
        const companyDivisionAddresses = [];
        for (const address of companyDivisionAddressesApi) {
            const companyDivisionAddress = this.getCompanyDivisionAddressFromApi(address);
            companyDivisionAddresses.push(companyDivisionAddress);
        }
        // set attributes
        const attributes = companyDivisionApi.data?.attributes;
        let companyDivision = null;
        if (attributes) {
            // set company division
            companyDivision = {
                id: attributes.id,
                name: attributes.name,
                website: attributes.website,
                email: attributes.email,
                phone: attributes.phone,
                fax: attributes.fax,
                ein: attributes.ein,
                dunsNumber: attributes.dunsNumber,
                cageCode: attributes.cageCode,
                about: attributes.about,
                logoUrl: attributes.logoUrl,
                linkedInUrl: attributes.linkedInUrl,
                twitterHandle: attributes.twitterHandle,
                companyId: attributes.companyId,
                addresses: companyDivisionAddresses,
                traceability: this.getTraceabilityFromApi(attributes.traceability),
                fileShare: this.getFileShareFromApi(attributes.fileShare)
            };
        }
        // return company division
        return companyDivision;
    }
    getCompanyDivisionAddressFromApi(companyDivisionAddressApi) {
        // set attributes
        const attributes = companyDivisionAddressApi.data?.attributes;
        let companyDivisionAddress = null;
        if (attributes) {
            // set company division address
            companyDivisionAddress = {
                id: attributes.id,
                address: attributes.address,
                additionalAddressDetails: attributes.additionalAddressDetails,
                city: attributes.city,
                zipPostalCode: attributes.zipPostalCode,
                stateProvinceCounty: attributes.stateProvinceCounty,
                country: attributes.country
            };
        }
        // return company division address
        return companyDivisionAddress;
    }
    getCompanyDomainFromApi(companyDomainApi) {
        // set attributes
        const attributes = companyDomainApi.data?.attributes;
        let companyDomain = null;
        if (attributes) {
            // set company domain
            companyDomain = {
                id: attributes.id,
                domain: attributes.domain,
                unconfirmedDomain: attributes.unconfirmedDomain,
                confirmed: attributes.confirmed,
                confirmedByUserId: attributes.confirmedByUserId
            };
        }
        // return company domain
        return companyDomain;
    }
    getCompanyUserFromApi(companyUserApi) {
        const userRolesApi = companyUserApi.data.attributes.roles;
        const companyUserRoles = [];
        for (const role of userRolesApi) {
            const companyUserRole = this.getCompanyUserRoleFromApi(role);
            companyUserRoles.push(companyUserRole);
        }
        // set attributes
        const attributes = companyUserApi.data?.attributes;
        let companyUser = null;
        if (attributes) {
            // set company user
            companyUser = {
                id: attributes.id,
                email: attributes.email,
                companyConfirmed: attributes.companyConfirmed,
                roles: companyUserRoles,
                firstName: attributes.firstName,
                lastName: attributes.lastName,
                companyId: attributes.companyId
            };
        }
        // return company user
        return companyUser;
    }
    getCompanyUserRoleFromApi(companyUserRoleApi) {
        // set attributes
        const attributes = companyUserRoleApi.data?.attributes;
        let companyUserRole = null;
        if (attributes) {
            // set company user role
            companyUserRole = {
                id: attributes.id,
                administrator: attributes.administrator,
                userId: attributes.userId,
                companyId: attributes.companyId
            };
        }
        // return company user role
        return companyUserRole;
    }
    getCompanyUserInviteFromApi(companyUserInviteApi) {
        // set attributes
        const attributes = companyUserInviteApi.data[0]?.attributes;
        let companyUserInvite = null;
        if (attributes) {
            // set company user invite
            companyUserInvite = {
                id: attributes.id,
                userId: attributes.userId,
                companyId: attributes.companyId,
                email: attributes.email,
                invitedByUserId: attributes.invitedByUserId,
                accepted: attributes.accepted
            };
        }
        // return company user invite
        return companyUserInvite;
    }
    getCompanyUserRequestFromApi(companyUserRequestApi) {
        // set attributes
        const attributes = companyUserRequestApi.data[0]?.attributes;
        let companyUserRequest = null;
        if (attributes) {
            // set company user request
            companyUserRequest = {
                id: attributes.id,
                userId: attributes.userId,
                companyId: attributes.companyId,
                email: attributes.email,
                accepted: attributes.accepted,
                acceptedByUserId: attributes.acceptedByUserId
            };
        }
        // return company user request
        return companyUserRequest;
    }
    /**
     * Traceability
     **/
    getTraceabilityFromApi(traceabilityApi) {
        // set attributes
        const attributes = traceabilityApi.data?.attributes;
        let traceability = null;
        if (attributes) {
            traceability = {
                id: attributes.id
            };
        }
        // return traceability
        return traceability;
    }
    /**
     * File Share
     **/
    getFileShareFromApi(fileShareApi) {
        // set attributes
        const attributes = fileShareApi.data?.attributes;
        let fileShare = null;
        if (attributes) {
            fileShare = {
                id: attributes.id
            };
        }
        // return file share
        return fileShare;
    }
};
ApiHelperStorageService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ApiHelperStorageService);
export { ApiHelperStorageService };
//# sourceMappingURL=api-helper-storage.service.js.map