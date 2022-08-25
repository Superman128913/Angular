// Angular
import {Component, OnInit} from '@angular/core';
// Application
import {TopbarMenuItem} from '../../../shared/models/topbar.model';
import {GlobalConstants} from '../../../shared/global-constants';

@Component({
  selector: 'app-traceability-upload',
  templateUrl: './traceability-upload.component.html',
  styleUrls: ['./traceability-upload.component.scss']
})
export class TraceabilityUploadComponent implements OnInit {

  // topbar
  public topbarMenuItems: Array<TopbarMenuItem>;

  constructor() {

    this.topbarMenuItems = [
      {
        image: 'bi bi-file-arrow-up',
        title: 'Document',
        path: GlobalConstants.traceabilityUploadDocumentPath
      },
      {
        image: 'bi bi-envelope-open',
        title: 'Email',
        path: GlobalConstants.traceabilityUploadEmailPath
      },
      {
        image: 'bi bi-file-code',
        title: 'API',
        path: GlobalConstants.traceabilityUploadApiPath
      }
    ];
  }

  ngOnInit(): void {
  }

}
