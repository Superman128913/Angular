// Angular
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
// Libraries
// Application
import {TopbarMenuItem} from '../../../shared/models/topbar.model';
import {LoggerService} from '../../../services/logger.service';

@Component({
    selector: 'app-traceability-library',
    templateUrl: './traceability-library.component.html',
    styleUrls: ['./traceability-library.component.scss']
})
export class TraceabilityLibraryComponent implements OnInit {

    // public
    public menu: Array<TopbarMenuItem>;
    public columns: Array<object>;
    public documents = [];
    public fileName = 'TraceabilityLibraryComponent';
    // dtOptions: any = {};
    
    constructor(private activatedRoute: ActivatedRoute,
                private loggerService: LoggerService) {

        this.columns = [
            {
                title: 'ID',
                data: 'id',
                class: 'hidden',
            }, {
                title: 'Name',
                data: 'name',
            }, {
                title: 'Part #',
                data: 'partNumber',
            }, {
                title: 'Serial #',
                data: 'serialNumber',
            }, {
                title: 'Lot #',
                data: 'lotNumber',
            }, {
                title: 'PO #',
                data: 'poNumber',
            }, {
                title: 'Status',
                data: 'status',
            },
        ];

        // set documents from resolver
        this.documents = this.activatedRoute.snapshot.data['documents'].map(document => document.data.attributes);
        
        // log documents
        this.loggerService.debug(this.fileName, 'constructor', 'documents', this.documents);
    }

  /** Public **/

  ngOnInit(): void {
    console.log(this.documents);
  }

  /** Private **/

}
