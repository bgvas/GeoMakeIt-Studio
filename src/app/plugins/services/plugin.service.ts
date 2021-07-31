import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {RootPlugins} from '../models/root-plugins';
import {Plugin} from '../models/plugin';
import {RootPluginReleases} from '../models/available_plugins/root-plugin-releases';
import {PluginRelease} from '../models/available_plugins/plugin-release';
import {map} from 'rxjs/operators';
import {json} from 'express';

@Injectable({
  providedIn: 'root'
})
export class PluginService {

  path = environment.be_Url + 'plugins';
  _plugin: any;
  pluginReleases = new Array<PluginRelease>();
  currentUser = JSON.parse(sessionStorage.getItem('user'));

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

  getAllPlugins(): Observable<Plugin[]> {
    return this.http.get<Plugin[]>(this.path + '/all');
  }

  getNumberOfAvailablePlugins(): Observable<number> {
    return this.getAllPlugins().pipe(map(plugins => {
      return plugins.length;
    }))
  }

  getAllPluginsOfUser(userId): Observable<RootPlugins> {
    return this.http.get<RootPlugins>(this.path + '/user/id/' + userId);
  }

  getAllPluginsByUserId(userId): Observable<RootPlugins> {
    return this.http.get<RootPlugins>(this.path + '/user/' + userId);
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
