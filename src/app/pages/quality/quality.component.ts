// Angular
import {Component, OnInit} from '@angular/core';
// Application
import {GlobalConstants} from '../../shared/global-constants';

@Component({
  selector: 'app-quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.scss']
})
export class QualityComponent implements OnInit {

  public qualityPolicy = GlobalConstants.qualityPolicy;
  public healthASndSafetyPolicy = GlobalConstants.healthASndSafetyPolicy;
  public qualityEmail = GlobalConstants.qualityEmail;
  public documents = [];

  private qualityPolicyFilePath: string | ArrayBuffer = '../assets/quality/Quality Policy.pdf';
  private healthASndSafetyPolicyFilePath: string | ArrayBuffer = '../assets/quality/Health and Safety Policy.pdf';

  constructor() {
  }

  ngOnInit(): void {
    // NOTE: setTimeout is required in order to allow smooth scrolling to top of page
    // something is called in the pdf-viewer that skips the smooth scroll
    setTimeout(() => {
      this.documents = [
        {
          filePath: this.qualityPolicyFilePath,
          title: 'Download'
        },
        {
          filePath: this.healthASndSafetyPolicyFilePath,
          title: 'Download'
        }
      ];
    }, 5);
  }

}
