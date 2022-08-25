// Angular
import {Component, OnInit} from '@angular/core';
// Libraries
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-traceability-document-rename-modal',
  templateUrl: './traceability-document-rename-modal.component.html'
})
export class TraceabilityDocumentRenameModalComponent implements OnInit {

  // public
  public document: any;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

  public closeModal() {
    // close modal
    this.activeModal.close();
  }

  public renamedDocument(document: any) {
    // update document
    this.document = document;

    // close modal
    this.closeModal();
  }

}
