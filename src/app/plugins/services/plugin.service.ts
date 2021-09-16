import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, timer} from 'rxjs';
import {environment} from '../../../environments/environment';
import {RootPlugins} from '../models/root-plugins';
import {Plugin} from '../models/plugin';
import {RootPluginReleases} from '../models/available_plugins/root-plugin-releases';
import {PluginRelease} from '../models/available_plugins/plugin-release';
import {delayWhen, map, retry, retryWhen} from 'rxjs/operators';
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
    return this.http.get<Plugin[]>(this.path + '/all').pipe(retry(3));
  }

  getNumberOfAvailablePlugins(): Observable<number> {
    return this.getAllPlugins().pipe(map(plugins => {
      return plugins['plugin'].length;
    }))
  }

  getAllPluginsOfUser(userId): Observable<Plugin[]> {
    return this.http.get<Plugin[]>(this.path + '/user/id/' + userId).pipe(retry(3));
  }

  /*getAllPluginsByUserId(userId): Observable<Plugin[]> {
    return this.http.get<Plugin[]>(this.path + '/user/' + userId).pipe(retry(3));
  }*/

  getReleasesOfPlugin(pluginId): Observable<RootPluginReleases> {
    return this.http.get<RootPluginReleases>(this.path + '/' + pluginId + '/releases').pipe(retry(3));
  }

  getLatestReleaseOfPlugin(pluginId): Observable<any> {
    return this.http.get(this.path + '/' + pluginId + '/releases').pipe(retry(3)).pipe(map((plugins: RootPluginReleases) => {
      return ((plugins.data[plugins.data.length - 1]) || new PluginRelease());
    }))
  }

  postReleaseForPlugin(pluginId, release: FormData): Observable<any> {
    return this.http.post(this.path + '/' + pluginId + '/releases', release).pipe(retry(3))
  }

  updatePluginById(pluginId: number, updatedPlugin): Observable<any> {
    return this.http.put<any>(this.path + '/update/' + pluginId, updatedPlugin).pipe(retry(3));
  }

  addNewPlugin(newPlugin): Observable<any> {
    return this.http.post<any>(this.path + '/new', [newPlugin]).pipe(retry(3));
  }

  deletePluginById(pluginId: number): Observable<any> {
    return this.http.delete<any>(this.path + '/delete/' + pluginId).pipe(retry(3));
  }

  checkIfIdentifierExists(identifier: any): Observable<any> {
    return this.http.post<any>(this.path + '/check/identifier', {'identifier': identifier}).pipe(retry(3));
  }


}
