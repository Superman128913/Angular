// Angular
import {Injectable} from '@angular/core';
// Libraries
import {LocalStorageService} from 'ngx-webstorage';
// Application
import {GlobalConstants} from '../../shared/global-constants';
import {CompanyUserInvite} from '../../shared/models/company_user_invite.model';
import {CompanyUserRequest} from '../../shared/models/company_user_request.model';
import {CompanyUserRole} from '../../shared/models/company_user.model';
import {User, UserSettings} from '../../shared/models/user.model';
import {ApiHelperStorageService} from './api-helper-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  private fileName = 'UserStorageService';

  constructor(private localStorage: LocalStorageService,
              private apiHelperStorageService: ApiHelperStorageService) {
  }

  // store user in local storage
  public storeUser(object: any) {
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
    const userSettings: UserSettings = this.apiHelperStorageService.getUserSettingsFromApi(attributes.settings);
    this.localStorage.store(GlobalConstants.settings, userSettings);
    // roles
    const userRolesApi = attributes.roles;
    const companyUserRoles = [];
    for (const role of userRolesApi) {
      const companyUserRole: CompanyUserRole = this.apiHelperStorageService.getCompanyUserRoleFromApi(role);
      companyUserRoles.push(companyUserRole);
    }
    this.localStorage.store(GlobalConstants.roles, companyUserRoles);
    this.localStorage.store(GlobalConstants.companyId, attributes.companyId);
    this.localStorage.store(GlobalConstants.companyConfirmed, attributes.companyConfirmed);
    // invite
    const companyUserInvite: CompanyUserInvite = this.apiHelperStorageService.getCompanyUserInviteFromApi(attributes.invite);
    this.localStorage.store(GlobalConstants.companyUserInvite, companyUserInvite);
    // request
    const companyUserRequest: CompanyUserRequest = this.apiHelperStorageService.getCompanyUserRequestFromApi(attributes.request);
    this.localStorage.store(GlobalConstants.companyUserRequest, companyUserRequest);
  }

  public storeEmail(email: string) {
    this.localStorage.store(GlobalConstants.email, email);
  }

  public storeDomain(domain: string) {
    this.localStorage.store(GlobalConstants.domain, domain);
  }

  public getUser(): User {
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

  public getUserId() {
    return this.localStorage.retrieve(GlobalConstants.userId);
  }

  public getUserEmail(): string {
    return this.localStorage.retrieve(GlobalConstants.email);
  }

  public getUserDomain() {
    return this.localStorage.retrieve(GlobalConstants.domain);
  }

  public getUserUnconfirmedEmail() {
    return this.localStorage.retrieve(GlobalConstants.unconfirmedEmail);
  }

  public getUserFirstName() {
    return this.localStorage.retrieve(GlobalConstants.firstName);
  }

  public getUserLastName() {
    return this.localStorage.retrieve(GlobalConstants.lastName);
  }

  public getUserFullName(): string {
    const firstName: string = this.localStorage.retrieve(GlobalConstants.firstName);
    const lastName: string = this.localStorage.retrieve(GlobalConstants.lastName);
    // return
    return firstName + ' ' + lastName;
  }

  public getUserTitle() {
    return this.localStorage.retrieve(GlobalConstants.title);
  }

  public getUserMobile() {
    return this.localStorage.retrieve(GlobalConstants.mobile);
  }

  public getUserWork() {
    return this.localStorage.retrieve(GlobalConstants.work);
  }

  public getUserProfileId() {
    return this.localStorage.retrieve(GlobalConstants.profileId);
  }

  public getUserProfileImagePath() {
    return this.localStorage.retrieve(GlobalConstants.profileImagePath);
  }

  public getUserCompanyUserRoles() {
    return this.localStorage.retrieve(GlobalConstants.roles);
  }

  public getUserCompanyInvite() {
    return this.localStorage.retrieve(GlobalConstants.companyUserInvite);
  }

  public getUserCompanyRequest() {
    return this.localStorage.retrieve(GlobalConstants.companyUserRequest);
  }

  public getUserSettings(): UserSettings {
    return this.localStorage.retrieve(GlobalConstants.settings);
  }

  public isUserConfirmed() {
    return this.localStorage.retrieve(GlobalConstants.confirmed);
  }

  // TODO - create a more secure way to check if a user is part of an organization
  public isUserInOrganization(): boolean {
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

  public isUserCompanyConfirmed() {
    return this.localStorage.retrieve(GlobalConstants.companyConfirmed);
  }

  public isCurrentUserCompanyAdmin(): boolean {
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

  public isUserCurrentUser(userId: bigint): boolean {
    const currentUserId = this.getUserId();

    // return
    return BigInt(currentUserId) === BigInt(userId);
  }

  public isCurrentUserLastCompanyAdmin(): boolean {
    const isAdmin = this.isCurrentUserCompanyAdmin();
    let bool: boolean;
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
    } else {
      bool = false;
    }
    // return
    return bool;
  }

  public isUserCompanyInvitePending(email: string): boolean {
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

  public isUserCompanyRequestPending(userId: bigint): boolean {
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

  private getOrganizationId() {
    return this.localStorage.retrieve(GlobalConstants.companyId);
  }

  private getCompanyUserRoles() {
    return this.localStorage.retrieve(GlobalConstants.companyUserRoles);
  }
}
