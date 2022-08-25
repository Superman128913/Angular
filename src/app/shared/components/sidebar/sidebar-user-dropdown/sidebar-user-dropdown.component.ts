// Angular
import {Component, OnInit} from '@angular/core';
// Application
import {UserStorageService} from '../../../../services/storage/user-storage.service';
import {GlobalConstants} from '../../../global-constants';
import {UserApiService} from '../../../../services/api/user-api.service';

@Component({
  selector: 'app-sidebar-user-dropdown',
  templateUrl: './sidebar-user-dropdown.component.html',
  styleUrls: ['./sidebar-user-dropdown.component.scss']
})
export class SidebarUserDropdownComponent implements OnInit {

  // public
  public fullName;
  public email;
  public userProfilePath = GlobalConstants.userProfilePath;

  constructor(private userApiService: UserApiService,
              private userStorageService: UserStorageService) {
    // set user variables
    this.fullName = this.userStorageService.getUserFullName();
    this.email = this.userStorageService.getUserEmail();
  }

  ngOnInit(): void {
  }

  /** Public **/

  public signOutUser() {
    this.userApiService.signOutUser();
  }

}
