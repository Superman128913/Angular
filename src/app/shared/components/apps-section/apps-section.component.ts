// Angular
import {Component, OnInit} from '@angular/core';
// Application
import {GlobalConstants} from '../../global-constants';

@Component({
  selector: 'app-apps-section',
  templateUrl: './apps-section.component.html',
  styleUrls: ['./apps-section.component.scss']
})
export class AppsSectionComponent implements OnInit {

  // traceability
  public traceabilityPath = GlobalConstants.traceabilityPath;
  public traceabilityDescription = GlobalConstants.traceabilityDescription;
  public traceabilityTitle = GlobalConstants.traceabilityTitle;
  // file share
  public fileSharePath = GlobalConstants.fileSharePath;
  public fileShareDescription = GlobalConstants.fileShareDescription;
  public fileShareTitle = GlobalConstants.fileShareTitle;
  // contracts manager
  public contractsManagerPath = GlobalConstants.contractsManagerPath;
  public contractsManagerDescription = GlobalConstants.contractsManagerDescription;
  public contractsManagerTitle = GlobalConstants.contractsManagerTitle;
  // blockchain
  public blockchainPath = GlobalConstants.blockchainPath;
  public blockchainDescription = GlobalConstants.blockchainDescription;
  public blockchainTitle = GlobalConstants.blockchainTitle;

  constructor() {
  }

  ngOnInit(): void {
  }

}
