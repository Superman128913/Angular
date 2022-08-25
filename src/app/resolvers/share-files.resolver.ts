import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { response } from 'express';
import { Observable, of } from 'rxjs';
import { FileShareApiService } from '../services/api/file-share-api.service';

@Injectable({
  providedIn: 'root'
})
export class ShareFilesResolver implements Resolve<boolean> {
  private fileName = 'ShareFilesResolver';
  

  constructor(private FileShareApiService: FileShareApiService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.FileShareApiService.getSharedFiles({ sent: route.data['sent'] });
  }
}
