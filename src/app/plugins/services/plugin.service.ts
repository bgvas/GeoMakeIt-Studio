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
import {CheckPluginIdentifierRequestModel} from '../models/check-plugin-identifier-request-model';
import {Plugins} from 'protractor/built/plugins';

@Injectable({
  providedIn: 'root'
})
export class PluginService {

  path = environment.be_Url + 'plugins';
  pathReleases = environment.be_Url + 'plugin-releases';
  filter = '?filter[]=user_id=';
  _plugin: Plugin;
  _temporary_object: any;
  pluginReleases = new Array<PluginRelease>();
  currentUser = JSON.parse(sessionStorage.getItem('user'));

  constructor(private http: HttpClient) { }


  set plugin(_plugin: Plugin) {
    this._plugin = _plugin;
  }

  get plugin(): Plugin {
    return this._plugin;
  }

  getAllPluginsOfUser(id: number): Observable<RootPlugins> {
    return this.http.get<RootPlugins>(this.path + this.filter + id).pipe(retry(3));
  }

  checkIfIdentifierExists(identifier: CheckPluginIdentifierRequestModel): Observable<any> {
    return this.http.post<any>(this.path + '/check-identifier', identifier).pipe(retry(3));
  }

  getAllPlugins(): Observable<RootPlugins> {
    return this.http.get<RootPlugins>(this.path).pipe(retry(3));
  }

  getReleaseById(release_id: number): Observable<PluginRelease> {
    return this.http.get<PluginRelease>(this.pathReleases + '/' + release_id);
  }

  /* tested */

  pluginReleasesById(pluginId): PluginRelease[] {
    this.getReleasesOfPlugin(pluginId).subscribe(releases => {
      this.pluginReleases =  releases.data;
    })
    return this.pluginReleases;
  }
  
  getPluginReleasesById(pluginId): Observable<RootPluginReleases> {
    return this.http.get<RootPluginReleases>(this.pathReleases + '?filter[]=plugin_id=' + pluginId)
  }

  getPluginById(pluginId: number): Observable<Plugin> {
    return this.http.get<Plugin>(this.path + '/' + pluginId);
  }



  getNumberOfAvailablePlugins(): Observable<number> {
    return this.getAllPlugins().pipe(map(plugins => {
      return plugins['plugin'].length;
    }))
  }

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

  createNewPlugin(newPlugin: Plugin): Observable<any> {
    return this.http.post<any>(this.path, newPlugin).pipe(retry(3));
  }

  deletePluginById(pluginId: number): Observable<any> {
    return this.http.delete<any>(this.path + '/delete/' + pluginId).pipe(retry(3));
  }



  get temporary_save() {
    return this._temporary_object;
  }

  set temporary_save(temp: any) {
    this._temporary_object = temp;
  }




}
