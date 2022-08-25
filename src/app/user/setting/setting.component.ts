// Angular
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
// Application
import {LoggerService} from '../../services/logger.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  // public
  public mfaEnabled;
  // private
  private fileName = 'SettingComponent';

  constructor(private activatedRoute: ActivatedRoute,
              private loggerService: LoggerService) {
    // set mfa enabled from resolver
    this.mfaEnabled = this.activatedRoute.snapshot.data['mfaEnabled'];
    // log mfa enabled
    this.loggerService.debug(this.fileName, 'constructor', 'mfaEnabled', this.mfaEnabled);
  }

  ngOnInit(): void {
  }

}
