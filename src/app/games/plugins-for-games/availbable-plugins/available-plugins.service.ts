import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RootPlugins} from '../../../classes/plugins/root-plugins';

@Injectable({
  providedIn: 'root'
})
export class AvailablePluginsService {


  url = 'assets/dummyJson/availablePlugins.json';

  constructor(private http: HttpClient) { }

  getAvailablePlugins(): Observable<RootPlugins> {
    // http calls => intercepting all requests or responses for exception catch//

    return this.http.get<RootPlugins>(this.url);
  }


}
