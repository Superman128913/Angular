// Angular
import {Injectable} from '@angular/core';
// Application
import {UserSettings} from '../../shared/models/user.model';
import {CompanyUserInvite} from '../../shared/models/company_user_invite.model';
import {CompanyUserRequest} from '../../shared/models/company_user_request.model';
import {CompanyUser, CompanyUserRole} from '../../shared/models/company_user.model';
import {CompanyDivisionAddress} from '../../shared/models/company_division_address.model';
import {CompanyDivision} from '../../shared/models/company_division.model';
import {CompanyDomain} from '../../shared/models/company_domain.model';
import {FileShare} from '../../shared/models/file_share.model';
import {Traceability} from '../../shared/models/traceability.model';

@Injectable({
  providedIn: 'root'
})
export class ApiHelperStorageService {

  constructor() {
  }

  /**
   * User
   **/

  public getUserSettingsFromApi(userSettingsApi: any): UserSettings {
    // set attributes
    const attributes = userSettingsApi.data?.attributes;

    let userSettings: UserSettings = null;
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

  public getCompanyDivisionFromApi(companyDivisionApi: any): CompanyDivision {
    const companyDivisionAddressesApi = companyDivisionApi.data.attributes.addresses;
    const companyDivisionAddresses = [];
    for (const address of companyDivisionAddressesApi) {
      const companyDivisionAddress: CompanyDivisionAddress = this.getCompanyDivisionAddressFromApi(address);
      companyDivisionAddresses.push(companyDivisionAddress);
    }

    // set attributes
    const attributes = companyDivisionApi.data?.attributes;

    let companyDivision: CompanyDivision = null;
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

  public getCompanyDivisionAddressFromApi(companyDivisionAddressApi: any): CompanyDivisionAddress {
    // set attributes
    const attributes = companyDivisionAddressApi.data?.attributes;

    let companyDivisionAddress: CompanyDivisionAddress = null;
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

  public getCompanyDomainFromApi(companyDomainApi: any): CompanyDomain {
    // set attributes
    const attributes = companyDomainApi.data?.attributes;

    let companyDomain: CompanyDomain = null;
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

  public getCompanyUserFromApi(companyUserApi: any): CompanyUser {
    const userRolesApi = companyUserApi.data.attributes.roles;
    const companyUserRoles = [];
    for (const role of userRolesApi) {
      const companyUserRole: CompanyUserRole = this.getCompanyUserRoleFromApi(role);
      companyUserRoles.push(companyUserRole);
    }

    // set attributes
    const attributes = companyUserApi.data?.attributes;

    let companyUser: CompanyUser = null;
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

  public getCompanyUserRoleFromApi(companyUserRoleApi: any): CompanyUserRole {
    // set attributes
    const attributes = companyUserRoleApi.data?.attributes;

    let companyUserRole: CompanyUserRole = null;
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

  public getCompanyUserInviteFromApi(companyUserInviteApi: any): CompanyUserInvite {
    // set attributes
    const attributes = companyUserInviteApi.data[0]?.attributes;

    let companyUserInvite: CompanyUserInvite = null;
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

  public getCompanyUserRequestFromApi(companyUserRequestApi: any): CompanyUserRequest {
    // set attributes
    const attributes = companyUserRequestApi.data[0]?.attributes;

    let companyUserRequest: CompanyUserRequest = null;
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

  public getTraceabilityFromApi(traceabilityApi: any): Traceability {
    // set attributes
    const attributes = traceabilityApi.data?.attributes;

    let traceability: Traceability = null;
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

  public getFileShareFromApi(fileShareApi: any): FileShare {
    // set attributes
    const attributes = fileShareApi.data?.attributes;

    let fileShare: FileShare = null;
    if (attributes) {
      fileShare = {
        id: attributes.id
      };
    }
    // return file share
    return fileShare;
  }
}
