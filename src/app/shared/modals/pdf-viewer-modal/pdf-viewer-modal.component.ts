// Angular
import {Component, OnInit} from '@angular/core';
// Libraries
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-pdf-viewer-modal',
  templateUrl: './pdf-viewer-modal.component.html'
})
export class PdfViewerModalComponent implements OnInit {

  // public
  public document: any;

  constructor(public activeModal: NgbActiveModal) {
    console.log('000', this.document);
  }

  ngOnInit(): void {
    console.log('111', this.document);
  }

  /**
   * Helper function to display file name without file extension
   *
   * @param filename
   */
  public displayWithoutFileExtension(filename: string) {
    const name = filename.split('.');
    return name[0];
  }

  public closeModal() {
    // close modal
    this.activeModal.close();
  }

}
