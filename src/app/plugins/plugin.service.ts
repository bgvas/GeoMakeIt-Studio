import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {RootPlugins} from '../classes/plugins/root-plugins';
import {Plugin} from '../classes/plugins/plugin';

@Injectable({
  providedIn: 'root'
})
export class PluginService {

  path = environment.apiUrl + 'plugins'

  _object: any;

  constructor(private http: HttpClient) { }


  set object(obj){
    this._object = obj;
  }

  get object(): any {
    return this._object;
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

  getPluginById(pluginId): Observable<any> {
    return this.http.get<any>(this.path + '/' + pluginId);
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
