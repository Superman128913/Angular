// Angular
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
// Application
import {TraceabilityDocumentRenameForm} from '../../models/traceability.model';
import {TraceabilityApiService} from '../../../services/api/traceability-api.service';
import {LoggerService} from '../../../services/logger.service';

@Component({
  selector: 'app-traceability-document-rename-form',
  templateUrl: './traceability-document-rename-form.component.html',
  styleUrls: ['./traceability-document-rename-form.component.scss']
})
export class TraceabilityDocumentRenameFormComponent implements OnInit {

  @Input() document: any;
  @Output() renamedDocumentEvent = new EventEmitter<any>();
  // public
  public traceabilityDocumentRenameForm: FormGroup;
  // private
  private fileName = 'TraceabilityDocumentRenameFormComponent';
  private name: string;
  private extension: string;

  constructor(private formBuilder: FormBuilder,
              private loggerService: LoggerService,
              private traceabilityApiService: TraceabilityApiService) {
  }

  /** Public **/

  // form controls
  public get formControls() {
    return this.traceabilityDocumentRenameForm.controls;
  }

  ngOnInit(): void {
    // create form
    // NOTE: must be in ngOnInit and not in constructor to get name
    this.traceabilityDocumentRenameForm = this.createTraceabilityDocumentRenameForm();

    // set name
    this.name = this.document.data?.attributes?.name.split('.')[0];
    // set extension
    this.extension = this.document.data?.attributes?.name.split('.')[1];
  }

  public renameTraceabilityDocument(traceabilityDocumentRenameFormValue: TraceabilityDocumentRenameForm) {
    const functionName = 'renameTraceabilityDocument';

    // add extension to name
    traceabilityDocumentRenameFormValue.name = traceabilityDocumentRenameFormValue.name + '.' + this.extension;

    // update traceability document via the api
    this.traceabilityApiService.renameTraceabilityDocument(
        this.document.data?.attributes?.id,
        traceabilityDocumentRenameFormValue
    ).subscribe({
      next: (document: any) => {
        // log document
        this.loggerService.debug(this.fileName, functionName, 'document', document);

        // emit close modal to output
        this.renamedDocumentEvent.emit(document);
      },
      error: (error: any) => {
        // log error
        this.loggerService.error(this.fileName, functionName, 'error', error);
      },
      complete: () => {
        // log message
        this.loggerService.info(this.fileName, functionName, 'complete', '');
      }
    });
  }

  /** Private **/

  private createTraceabilityDocumentRenameForm() {
    return this.formBuilder.group({
      name: [
        this.name
      ]
    });
  }

}
