// Angular
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// Libraries
import {Observable} from 'rxjs';
// Application
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperApiService {

  constructor(private httpClient: HttpClient) {
  }

  // GET method
  public get(path: string, options?: any): Observable<any> {
    const endpoint = environment.apiUrl + path;
    return this.httpClient.get(endpoint, options);
  }

  // POST method
  public post(path: string, body: any, options?: any): Observable<any> {
    const endpoint = environment.apiUrl + path;
    return this.httpClient.post(endpoint, body, options);
  }

  // PUT method
  public put(path: string, body: any, options?: any): Observable<any> {
    const endpoint = environment.apiUrl + path;
    return this.httpClient.put(endpoint, body, options);
  }

  // DELETE method
  public delete(path: string, body?: any): Observable<any> {
    const endpoint = environment.apiUrl + path;
    return this.httpClient.delete(endpoint, body);
  }

  // HEAD method
  public head(url: string, options?: any): Observable<any> {
    return this.httpClient.head(url, options);
  }
}
