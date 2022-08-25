// Angular
import {Component, OnInit} from '@angular/core';
// Application
import {GlobalConstants} from '../../shared/global-constants';
import {SidebarMenuItem} from '../../shared/models/sidebar.model';
import {Logo} from '../../shared/models/logo';

@Component({
    selector: 'app-traceability',
    templateUrl: './traceability.component.html',
    styleUrls: ['./traceability.component.scss']
})
export class TraceabilityComponent implements OnInit {

    // sidebar
    public traceabilityLogo: Logo = GlobalConstants.traceabilityWordmarkAlabaster;
    public sidebarMenuItems: Array<SidebarMenuItem>;
    public traceabilityClass = GlobalConstants.traceabilityClass;
    // public modifyVisible = false;
    // public modifyAsset;
    // public assets;
    // public assetUpdateForm: FormGroup;

    constructor() {

        this.sidebarMenuItems = [
            {
                image: 'bi bi-files',
                title: 'Dashboard',
                path: GlobalConstants.traceabilityDashboardPath
            },
            {
                image: 'bi bi-archive',
                title: 'Library',
                path: GlobalConstants.traceabilityLibraryPath
            },
            {
                image: 'bi bi-file-arrow-up',
                title: 'Upload',
                path: GlobalConstants.traceabilityUploadPath
            },
            // send
            {
                image: 'bi bi-send',
                title: 'Send',
                path: GlobalConstants.traceabilitySendPath
            },
            // request
            {
                image: 'bi bi-reply',
                title: 'Request',
                path: GlobalConstants.traceabilityRequestPath
            },
            // received files
            {
                image: 'bi bi-share',
                title: 'Received',
                path: GlobalConstants.traceabilityReceivedFilesPath
            },
            {
                image: 'bi bi-file-bar-graph',
                title: 'Reports',
                path: GlobalConstants.traceabilityReportsPath
            },
            {
                image: 'bi bi-gear',
                title: 'Settings',
                path: GlobalConstants.traceabilitySettingsPath
            }
        ];
  }

  ngOnInit(): void {
  }

  // ngOnInit(): void {
  //   this.getAll2().subscribe(out=> {
  //         this.assets = out;
  //       }
  //   );
  //
  //   this.assetUpdateForm = new FormGroup({
  //
  //     id: new FormControl(''),
  //     color: new FormControl(''),
  //     quantity: new FormControl(''),
  //     appraisedValue: new FormControl(''),
  //     //owner: new FormControl('')
  //   });
  // }

  // public getAll2(){
  //   const out = this.taasApiService.getAll2();
  //   return out;
  // }
  //
  // public toggleField(i){
  //   this.modifyAsset = i;
  //   this.modifyVisible = !this.modifyVisible;
  //   this.assetUpdateForm.get('id').setValue(this.assets[i].ID);
  //   //this.assetUpdateForm.get('owner').setValue(this.assets[i].owner);
  //   this.assetUpdateForm.get('color').setValue(this.assets[i].color);
  //   this.assetUpdateForm.get('quantity').setValue(this.assets[i].quantity.toString());
  //   this.assetUpdateForm.get('appraisedValue').setValue(this.assets[i].appraisedValue.toString());
  // }
  //
  // public onClickSubmit(i) {
  //   //alert("Entered owner : " + this.assetUpdateForm.value.owner + this.modifyAsset);
  //   //const out;
  //   // let serializedForm = JSON.stringify(this.assetUpdateForm);
  //
    //   this.traceabilityService.update2(this.assetUpdateForm.value).subscribe(out => {
    //     if(out) {
  //       this.assets[this.modifyAsset].color = this.assetUpdateForm.value.color;
  //       this.assets[this.modifyAsset].quantity = this.assetUpdateForm.value.quantity;
  //       this.assets[this.modifyAsset].appraisedValue = this.assetUpdateForm.value.appraisedValue;
  //     }
  //   });
  //   return true;
  // }

}
