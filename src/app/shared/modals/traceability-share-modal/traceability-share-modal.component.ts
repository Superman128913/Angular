// Angular
import {Component, Input, OnInit} from '@angular/core';
// Libraries
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-traceability-share-modal',
  templateUrl: './traceability-share-modal.component.html'
})
export class TraceabilityShareModalComponent implements OnInit {

  @Input() documents: Array<any>;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

  public closeModal() {
    // close modal
    this.activeModal.close();
  }
}
