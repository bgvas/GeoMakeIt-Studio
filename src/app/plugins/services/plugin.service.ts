import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {RootPlugins} from '../models/root-plugins';
import {Plugin} from '../models/plugin';
import {RootPluginReleases} from '../models/available_plugins/root-plugin-releases';
import {PluginRelease} from '../models/available_plugins/plugin-release';

@Injectable({
  providedIn: 'root'
})
export class PluginService {

  path = environment.apiUrl + 'plugins'

  _object: any;
  pluginReleases = new Array<PluginRelease>();

  constructor(private http: HttpClient) { }


  set object(obj) {
    this._object = obj;
  }

  get object(): any {
    return this._object;
  }

  pluginReleasesById(pluginId): PluginRelease[] {
    this.getReleasesOfPlugin(pluginId).subscribe(releases => {
      this.pluginReleases =  releases.data;
    })

    return this.pluginReleases;
  }

  getInstalledPluginsOfAGame(gameId): Observable<any> {
    return this.http.get<any>(this.path + '/' + gameId);
  }

  getAvailablePlugins(): Observable<any> {
    //return this.http.get<any>(this.path);
    return this.http.get<any>('assets/dummyJson/availablePlugins.json')
  }

  getAllPluginsOfUser(): Observable<RootPlugins> {
    return this.http.get<RootPlugins>(this.path);
  }

  getReleasesOfPlugin(pluginId): Observable<RootPluginReleases> {
    return this.http.get<RootPluginReleases>(this.path + '/' + pluginId + '/releases');
  }

  postReleaseForPlugin(pluginId, release: FormData): Observable<any> {
    return this.http.post(this.path + '/' + pluginId + '/releases', release)
  }

  getPluginById(pluginId): Observable<RootPlugins> {
    /*return this.http.get<any>(this.path + '/' + pluginId);*/
    return this.http.get<RootPlugins>('assets/dummyJson/availablePlugins.json')
  }

  putPluginById(pluginId: number, updatedPlugin: Plugin): Observable<any> {
    return this.http.put<any>(this.path + '/' + pluginId, updatedPlugin);
  }

  postPlugin(newPlugin: Plugin): Observable<Plugin> {
    return this.http.post<Plugin>(this.path , newPlugin);
  }

  deletePluginById(pluginId: number): Observable<any> {
    return this.http.delete<any>(this.path + '/' + pluginId);
  }


}
