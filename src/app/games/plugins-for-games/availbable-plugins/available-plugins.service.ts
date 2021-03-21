import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RootAvailablePlugins} from '../../../classes/plugins/root-available-plugins';

@Injectable({
  providedIn: 'root'
})
export class AvailablePluginsService {


  url = 'assets/dummyJson/availablePlugins.json';




  constructor(private http: HttpClient) { }

  getAvailablePlugins(): Observable<RootAvailablePlugins> {
    // http calls => intercepting all requests or responses for exception catch//

    return this.http.get<RootAvailablePlugins>(this.url);
  }


}
