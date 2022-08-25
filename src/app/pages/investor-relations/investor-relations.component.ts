// Angular
import {Component, OnInit} from '@angular/core';
// Application
import {GlobalConstants} from '../../shared/global-constants';

@Component({
  selector: 'app-investor-relations',
  templateUrl: './investor-relations.component.html',
  styleUrls: ['./investor-relations.component.scss']
})
export class InvestorRelationsComponent implements OnInit {

  public ourStory = GlobalConstants.ourStory;
  public homePath = GlobalConstants.homePath;
  public aboutUsPath = GlobalConstants.aboutUsPath;
  public investorRelationsEmail = GlobalConstants.investorRelationsEmail;

  constructor() {
  }

  ngOnInit(): void {
  }

}
