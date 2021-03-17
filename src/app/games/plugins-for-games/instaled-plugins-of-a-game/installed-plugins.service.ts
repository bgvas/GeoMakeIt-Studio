import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstalledPluginsService {


  constructor(private http: HttpClient) { }

  getInstalledPluginsPerGame(gameId): Observable<any> {
    // TODO -> http calls => intercepting all requests or responses for exception catch

    const url = 'assets/dummyJson/installedPlugins.json';
    return this.http.get(url);
  }

}
