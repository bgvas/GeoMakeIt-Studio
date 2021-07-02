import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {RootPlugins} from '../models/root-plugins';
import {Plugin} from '../models/plugin';
import {RootPluginReleases} from '../models/available_plugins/root-plugin-releases';
import {PluginRelease} from '../models/available_plugins/plugin-release';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PluginService {

  path = environment.apiUrl + 'plugins';
  newPathUrl = environment.myApiUrl;

  _plugin: any;
  pluginReleases = new Array<PluginRelease>();

  constructor(private http: HttpClient) { }


  set plugin(aPlugin) {
    this._plugin = aPlugin;
  }

  get plugin(): any {
    return this._plugin;
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

  getAvailablePlugins(): Observable<RootPlugins> {
     return this.http.get<RootPlugins>(this.path);
    // return this.http.get<any>('assets/dummyJson/availablePlugins.json')
  }

  getNumberOfAvailablePlugins(): Observable<number> {
    return this.getAvailablePlugins().pipe(map(plugins => {
      return plugins.data.length;
    }))
  }

  getAllPluginsOfUser(): Observable<RootPlugins> {
    return this.http.get<RootPlugins>(this.path);
  }

  getAllPluginsByUserId(userId): Observable<any> {
    return this.http.get<any>(this.newPathUrl + 'plugin/user/1');
  }

  getReleasesOfPlugin(pluginId): Observable<RootPluginReleases> {
    return this.http.get<RootPluginReleases>(this.path + '/' + pluginId + '/releases');
  }

  getLatestReleaseOfPlugin(pluginId): Observable<any> {
    return this.http.get(this.path + '/' + pluginId + '/releases').pipe(map((plugins: RootPluginReleases) => {
      return ((plugins.data[plugins.data.length - 1]) || new PluginRelease());
    }))
  }

  postReleaseForPlugin(pluginId, release: FormData): Observable<any> {
    return this.http.post(this.path + '/' + pluginId + '/releases', release)
  }

  getAllPlugins(): Observable<RootPlugins> {
    return this.http.get<RootPlugins>(this.newPathUrl + 'plugin/all');
    // return this.http.get<RootPlugins>('assets/dummyJson/availablePlugins.json')
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
