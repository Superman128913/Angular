// Angular
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
// Libraries
// Application
import {TopbarMenuItem} from '../../../shared/models/topbar.model';
import {LoggerService} from '../../../services/logger.service';

@Component({
  selector: 'app-traceability-send',
  templateUrl: './traceability-send.component.html',
  styleUrls: ['./traceability-send.component.scss']
})
export class TraceabilitySendComponent implements OnInit {
  public menu: Array<TopbarMenuItem>;
  public columns: Array<object>;
  public dtOptions: any = {};
  public documents = [];
  public fileName = 'TraceabilitySendComponent';

  constructor(private activatedRoute: ActivatedRoute,
              private loggerService: LoggerService) {

    this.columns = [
      {
        title: 'File',
        data: 'docs',
        render: (data, type, row, meta) => {
          if (type !== 'display') return data;
          let result = row.docs.map(doc => `<a href="${doc.data.attributes.url}" target="_blank">${doc.data?.attributes.name}</a>`);
          return result.join('<br/>');
        },
      }, {
        title: 'Receiver',
        data: 'email',
      }, {
        title: 'Sent At',
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
