import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {RootPlugins} from '../classes/plugins/root-plugins';
import {Plugin} from '../classes/plugins/plugin';
import {RootPluginReleases} from '../classes/plugins/available_plugins/root-plugin-releases';
import {PluginRelease} from '../classes/plugins/available_plugins/plugin-release';

@Injectable({
  providedIn: 'root'
})
export class PluginService {

  path = environment.apiUrl + 'plugins'

  _object: any;
  pluginReleases = new Array<PluginRelease>();

  constructor(private http: HttpClient) { }


  set object(obj){
    this._object = obj;
  }

  get object(): any {
    return this._object;
  }

  pluginReleasesById(pluginId): PluginRelease[] {

    this.getReleasesOfPlugin(pluginId).subscribe(releases => {
      console.log(releases.data);
      this.pluginReleases =  releases.data;
    })

    return this.pluginReleases;
  }

  getInstalledPluginsOfAGame(gameId): Observable<any> {
    return this.http.get<any>(this.path + '/' + gameId);
  }

  getAvailablePlugins(): Observable<any> {
    return this.http.get<any>(this.path);
  }

  getAllPluginsOfUser(): Observable<RootPlugins> {
    return this.http.get<RootPlugins>(this.path);
  }

  getReleasesOfPlugin(pluginId): Observable<RootPluginReleases> {
    /*return this.http.get<RootPluginReleases>(this.path + '/' + pluginId + '/releases');*/
    return this.http.get<RootPluginReleases>('assets/dummyJson/plugin_release.json');
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
