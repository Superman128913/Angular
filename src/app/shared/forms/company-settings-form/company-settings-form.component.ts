// Angular
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
// Application
import {CompanySettingsForm} from '../../models/company.model';

@Component({
  selector: 'app-company-settings-form',
  templateUrl: './company-settings-form.component.html',
  styleUrls: ['./company-settings-form.component.scss']
})
export class CompanySettingsFormComponent implements OnInit {

  // initializing company settings form
  public companySettingsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // create user profile form
    this.companySettingsForm = this.createCompanySettingsForm();

    // disable form
    this.companySettingsForm.disable();
  }

  /** Public **/

  ngOnInit(): void {
  }

  // update company settings from form
  public updateCompanySettings(companySettingsFormValue: CompanySettingsForm) {
  }

  /** Private **/

  private createCompanySettingsForm() {
    return this.formBuilder.group({
    });
  }

}
