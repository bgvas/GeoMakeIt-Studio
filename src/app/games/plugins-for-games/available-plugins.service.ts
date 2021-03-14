import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvailablePluginsService {




  url = 'assets/dummyJson/availablePlugins.json';




  constructor(private http: HttpClient) { }

  getAvailablePlugins(): Observable<any> {
    // http calls => intercepting all requests or responses for exception catch//

    return this.http.get(this.url);
  }


}
