import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LoggerService} from '../../services/logger.service';
import { FileShareApiService } from '../../services/api/file-share-api.service';

@Component({
  selector: 'app-obfuscated',
  templateUrl: './obfuscated.component.html',
  styleUrls: ['./obfuscated.component.scss']
})
export class ObfuscatedComponent implements OnInit {
  public colNames: Array<string>;
  public dtOptions: any = {};
  public sharing: any = {};
  public fileName = 'TraceabilityReceivedFilesComponent';

  constructor(private activatedRoute: ActivatedRoute,
              private fileShareService: FileShareApiService,
              private loggerService: LoggerService) {

    this.colNames = [
      'File',
      'Received at',
    ];

    this.dtOptions = {};
  }

  ngOnInit(): void {
    this.getSharing();
  }

  getSharing(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('uuid');
    this.fileShareService.getSharing(id)
      .subscribe(sharing => this.sharing = sharing);
  }

}
