// Angular
import {Component, OnInit} from '@angular/core';
// Application
import {GlobalConstants} from '../../shared/global-constants';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  public backedByBlockchainPath = GlobalConstants.backedByBlockchainPath;
  public careersPath = GlobalConstants.careersPath;

  constructor() {
  }

  ngOnInit(): void {
  }

}
