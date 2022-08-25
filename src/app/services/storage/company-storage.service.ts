// Angular
import {Injectable} from '@angular/core';
// Libraries
import {LocalStorageService} from 'ngx-webstorage';
// Application
import {GlobalConstants} from '../../shared/global-constants';
import {CompanyDivision} from '../../shared/models/company_division.model';
import {CompanyDomain} from '../../shared/models/company_domain.model';
import {CompanyUserInvite} from '../../shared/models/company_user_invite.model';
import {CompanyUserRequest} from '../../shared/models/company_user_request.model';
import {CompanyUser, CompanyUserRole} from '../../shared/models/company_user.model';
import {CompanyDivisionAddress} from '../../shared/models/company_division_address.model';
import {ApiHelperStorageService} from './api-helper-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyStorageService {

  private fileName = 'CompanyStorageService';

  constructor(private localStorage: LocalStorageService,
              private apiHelperStorageService: ApiHelperStorageService) {
  }

  /**
   * Company
   **/

  // store company in local storage
  public storeCompany(object: any) {
    // set attributes
    const attributes = object.company?.data?.attributes;

    this.localStorage.store(GlobalConstants.companyId, attributes.id);
    // divisions
    const companyDivisionsApi = attributes.divisions;
    const companyDivisions = [];
    for (const division of companyDivisionsApi) {
      const companyDivision: CompanyDivision = this.apiHelperStorageService.getCompanyDivisionFromApi(division);
      companyDivisions.push(companyDivision);
    }
    this.localStorage.store(GlobalConstants.companyDivisions, companyDivisions);
    // domains
    const companyDomainsApi = attributes.domains;
    const companyDomains = [];
    for (const domain of companyDomainsApi) {
      const companyDomain: CompanyDomain = this.apiHelperStorageService.getCompanyDomainFromApi(domain);
      companyDomains.push(companyDomain);
    }
    this.localStorage.store(GlobalConstants.companyDomains, companyDomains);
    // users
    const companyUsersApi = attributes.users;
    const companyUsers = [];
    for (const user of companyUsersApi) {
      const companyUser: CompanyUser = this.apiHelperStorageService.getCompanyUserFromApi(user);
      companyUsers.push(companyUser);
    }
    this.localStorage.store(GlobalConstants.companyUsers, companyUsers);
    // roles
    const userRolesApi = attributes.roles;
    const companyUserRoles = [];
    for (const role of userRolesApi) {
      const companyUserRole: CompanyUserRole = this.apiHelperStorageService.getCompanyUserRoleFromApi(role);
      companyUserRoles.push(companyUserRole);
    }
    this.localStorage.store(GlobalConstants.companyUserRoles, companyUserRoles);
    // invites
    const companyUserInvitesApi = attributes.invites;
    const companyUserInvites = [];
    for (const invite of companyUserInvitesApi) {
      const companyUserInvite: CompanyUserInvite = this.apiHelperStorageService.getCompanyUserInviteFromApi(invite);
      companyUserInvites.push(companyUserInvite);
    }
    this.localStorage.store(GlobalConstants.companyUserInvites, companyUserInvites);
    // requests
    const companyUserRequestsApi = attributes.requests;
    const companyUserRequests = [];
    for (const request of companyUserRequestsApi) {
      const companyUserRequest: CompanyUserRequest = this.apiHelperStorageService.getCompanyUserRequestFromApi(request);
      companyUserRequests.push(companyUserRequest);
    }
    this.localStorage.store(GlobalConstants.companyUserRequests, companyUserRequests);
  }

  // clear company in local storage
  public clearCompany() {
    this.localStorage.clear(GlobalConstants.companyId);
    this.localStorage.clear(GlobalConstants.companyDivisions);
    this.localStorage.clear(GlobalConstants.companyDomains);
    this.localStorage.clear(GlobalConstants.companyUsers);
    this.localStorage.clear(GlobalConstants.companyUserRoles);
  }

  public getCompanyId() {
    return this.localStorage.retrieve(GlobalConstants.companyId);
  }

  /**
   * Company Division
   **/

  public getCompanyDivisionNames() {
    const companyDivisions = this.localStorage.retrieve(GlobalConstants.companyDivisions);
    const companyDivisionNames = [];
    if (companyDivisions.count === 1) {
      companyDivisionNames.push(companyDivisions.first.name);
    } else {
      for (const companyDivision of companyDivisions) {
        companyDivisionNames.push(companyDivision.name);
      }
    }
    // return
    return companyDivisionNames;
  }

  public getCompanyDivisions() {
    // set
    const companyDivisions = this.localStorage.retrieve(GlobalConstants.companyDivisions);
    // return
    return companyDivisions;
  }

  public getCompanyDivisionById(companyDivisionId: bigint): CompanyDivision {
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

  public getCompanyDivisionNameByTraceabilityId(traceabilityId: bigint): string {
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

  public getTraceabilityIdByCompanyDivisionName(name: string): bigint {
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

  public getCompanyDivisionNameByFileShareId(fileShareId: bigint): string {
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

  public getFileShareIdByCompanyDivisionName(name: string): bigint {
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

  public getCompanyDivisionAddressesByCompanyDivisionId(companyDivisionId: bigint): CompanyDivisionAddress[] {
    // set company division
    const companyDivision = this.getCompanyDivisionById(companyDivisionId);
    // set company division address
    const companyDivisionAddresses = companyDivision.addresses;
    // return company division addresses
    return companyDivisionAddresses;
  }

  public getCompanyDivisionAddressById(companyDivisionAddressId: bigint): CompanyDivisionAddress {
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

  public getCompanyDomains() {
    return this.localStorage.retrieve(GlobalConstants.companyDomains);
  }

  /**
   * Company User
   **/

  public getCompanyUsers() {
    return this.localStorage.retrieve(GlobalConstants.companyUsers);
  }

  public getCompanyUserInvites() {
    return this.localStorage.retrieve(GlobalConstants.companyUserInvites);
  }

  public getCompanyUserRequests() {
    return this.localStorage.retrieve(GlobalConstants.companyUserRequests);
  }

  public getCompanyUserById(companyUserId: bigint): CompanyUser {
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

  public isCompanyUserInvitePending(userId: bigint): boolean {
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

  public isCompanyUserRequestPending(userId: bigint): boolean {
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
}
