// Angular
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// Application
import {LoggerService} from '../../../services/logger.service';
import {TraceabilityApiService} from '../../../services/api/traceability-api.service';
import {TraceabilityDocumentUpdateForm} from '../../models/traceability.model';
import {SerialLotNumberValidator} from '../../validators/serial-lot-number.validator';

@Component({
  selector: 'app-traceability-document-upload-form',
  templateUrl: './traceability-document-upload-form.component.html',
  styleUrls: ['./traceability-document-upload-form.component.scss']
})
export class TraceabilityDocumentUploadFormComponent implements OnInit {

  // input/output
  @Input() documentId!: bigint;
  @Output() documentEvent = new EventEmitter<any>();
  // public
  public traceabilityDocumentUploadForm: FormGroup;
  public uploading = false;
  // private
  private fileName = 'TraceabilityDocumentUploadFormComponent';

  constructor(private loggerService: LoggerService,
              private formBuilder: FormBuilder,
              private traceabilityApiService: TraceabilityApiService) {
    // create form
    this.traceabilityDocumentUploadForm = this.createDocumentUploadForm();
  }

  /** Public **/

  // form controls
  public get formControls() {
    return this.traceabilityDocumentUploadForm.controls;
  }

  ngOnInit(): void {
  }

  public uploadTraceabilityDocument(traceabilityDocumentUpdateFormValue: TraceabilityDocumentUpdateForm) {
    const functionName = 'uploadTraceabilityDocument';

    // set uploading
    this.uploading = true;

    // update traceability document via the api
    this.traceabilityApiService.updateTraceabilityDocument(this.documentId, traceabilityDocumentUpdateFormValue).subscribe({
      next: (document: any) => {
        // log document
        this.loggerService.debug(this.fileName, functionName, 'document', document);

        // set uploading
        this.uploading = false;

        // emit document to output
        this.documentEvent.emit(document);
      },
      error: (error: any) => {
        // set uploading
        this.uploading = false;

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

  private createDocumentUploadForm() {
    return this.formBuilder.group({
      partNumber: [
        '',
        Validators.required
      ],
      serialNumber: [
        ''
      ],
      lotNumber: [
        ''
      ]
    }, {
      validators: [
        SerialLotNumberValidator.serialOrLotNumberRequired
      ],
      updateOn: 'blur'
    });
  }

}
