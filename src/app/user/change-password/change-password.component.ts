// Angular
import {Component, OnInit} from '@angular/core';
// Application
import {UserApiService} from '../../services/api/user-api.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private userApiService: UserApiService) {
    // validate token is needed to get user from reset password flow
    this.userApiService.validateToken();
  }

  ngOnInit(): void {
  }

}
