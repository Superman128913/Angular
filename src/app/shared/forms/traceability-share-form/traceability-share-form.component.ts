import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GlobalConstants} from '../../global-constants';
import {FileShareApiService} from '../../../services/api/file-share-api.service';
import {TraceabilityShareForm} from '../../models/file_share.model';

@Component({
  selector: 'app-traceability-share-form',
  templateUrl: './traceability-share-form.component.html',
  styleUrls: ['./traceability-share-form.component.scss']
})

export class TraceabilityShareFormComponent implements OnInit {
  @Input() documents: Array<any>;
  @Output() sharedEvent = new EventEmitter<number>();

  // public
  public traceabilityShareForm: FormGroup;
  public emailPlaceholder = GlobalConstants.emailPlaceholder;

  // private
  private fileName = 'TraceabilityShareFormComponent';

  constructor(private formBuilder: FormBuilder,
              private FileShareApiService: FileShareApiService) {  

    this.traceabilityShareForm = this.createTraceabilityShareForm();
    this.addEmail();
  }

  ngOnInit(): void {
  }

  public addEmail() {
    const emailFormGroup = this.formBuilder.group({
      email: [
        '',
        [
          Validators.email,
          Validators.pattern(GlobalConstants.emailPattern)
        ]
      ]
    });

    this.emails.push(emailFormGroup);
  }

  public removeEmail(emailIndex: number) {
    this.emails.removeAt(emailIndex);
  }

  // form controls
  public get formControls() {
    return this.traceabilityShareForm.controls;
  }

  public get emails() {
    return this.formControls['emails'] as FormArray;
  }

  public handleShareFiles(formValue: TraceabilityShareForm) {

    // const rows = $('#dataTable').DataTable().rows({ selected: true });

    if (this.documents.length < 1) {
      alert("Please select at least one file to share.");
      return;
    }

    this.FileShareApiService.shareFiles({
      emails: formValue.emails,
      documentIds: this.documents.map((doc) => doc['id']),
    })

    this.sharedEvent.emit(this.documents.length);
  }

  private createTraceabilityShareForm() {
    return this.formBuilder.group({
      emails: this.formBuilder.array([]),
    }, {
      validators: [
      ],
      updateOn: 'blur'
    });
  }
}
