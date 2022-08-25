import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
// Libraries
// Application
import {TopbarMenuItem} from '../../../shared/models/topbar.model';
import {LoggerService} from '../../../services/logger.service';

@Component({
  selector: 'app-traceability-received-files',
  templateUrl: './traceability-received-files.component.html',
  styleUrls: ['./traceability-received-files.component.scss']
})
export class TraceabilityReceivedFilesComponent implements OnInit {
  public menu: Array<TopbarMenuItem>;
  public columns: Array<object>;
  public dtOptions: any = {};
  public documents = [];
  public fileName = 'TraceabilityReceivedFilesComponent';

  constructor(private activatedRoute: ActivatedRoute,
              private loggerService: LoggerService) {

    this.columns = [
      {
        title: 'Sender',
        data: 'email',
      }, {
        title: 'File',
        data: 'docs',
        render: (data, type, row, meta) => {
          if (type !== 'display') return data;
          let result = row.docs.map(doc => `<a href="${doc.data.attributes.url}" target="_blank">${doc.data?.attributes.name}</a>`);
          return result.join('<br/>');
        },
      }, {
        title: 'Received At',
        data: 'createdAt',
        render: (data, type, row, meta) => {
          if (type !== 'display') return data;
          return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(row.createdAt));
        },
      }
    ];

    // set documents from resolver
    this.documents = this.activatedRoute.snapshot.data['documents'].map(document => document.attributes);

    // log documents
    this.loggerService.debug(this.fileName, 'constructor', 'documents', this.documents);
  }

  ngOnInit(): void {
  }
}
