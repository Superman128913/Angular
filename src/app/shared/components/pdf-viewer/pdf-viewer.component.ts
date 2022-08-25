// Angular
import {Component, Input, OnInit} from '@angular/core';
// Libraries
import {PDFDocumentProxy, PDFProgressData} from 'ng2-pdf-viewer';
// Application
import {LoggerService} from '../../../services/logger.service';
import {HttpHelperApiService} from '../../../services/api/http-helper-api.service';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent implements OnInit {

  @Input() src = '';
  @Input() originalSize: boolean;
  @Input() fitToPage: boolean;

  private fileName = 'PdfViewerComponent';

  constructor(private loggerService: LoggerService,
              private httpHelperApiService: HttpHelperApiService) {
    // check if file exists
    // this.checkIfFileExists();
  }

  ngOnInit(): void {
  }

  // do anything with "pdf"
  public afterLoadComplete(pdf: PDFDocumentProxy) {
    this.loggerService.debug(this.fileName, 'afterLoadComplete', 'pdf', pdf);
  }

  // do anything with progress data. For example progress indicator
  public onProgress(progressData: PDFProgressData) {
    this.loggerService.debug(this.fileName, 'onProgress', 'progressData', progressData);
  }

  // private checkIfFileExists() {
  //   const functionName = 'checkIfFileExists';
  //
  //   this.httpHelperApiService.head(this.src).subscribe(
  //       (next: any) => {
  //         // log data
  //         this.loggerService.debug(this.fileName, functionName, 'next', next);
  //       },
  //       error => {
  //         // log error
  //         this.loggerService.error(this.fileName, functionName, 'error', error);
  //       },
  //       () => {
  //         // log message
  //         this.loggerService.info(this.fileName, functionName, 'complete', '');
  //       });
  // }
}
