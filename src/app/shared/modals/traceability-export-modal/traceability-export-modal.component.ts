// Angular
import {Component, Input, OnInit} from '@angular/core';
// Libraries
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-traceability-export-modal',
  templateUrl: './traceability-export-modal.component.html'
})
export class TraceabilityExportModalComponent implements OnInit {

  @Input() documents: Array<any>;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

  public closeModal(selectedBtn: string) {
    // close modal
    this.activeModal.close(selectedBtn);
  }
}
