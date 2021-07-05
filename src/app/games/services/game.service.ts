import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GameRoot} from '../models/games/game-root';
import {environment} from '../../../environments/environment';
import {Game} from '../models/games/game';
import {RootInstalledPlugins} from '../../plugins/models/installed_plugins/root-installed-plugins';
import {InstallPlugins} from '../models/installPlugins/install-plugins';
import {projectElements} from '../models/projectElements/project-elements';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  _object: any;
  path = environment.apiUrl + 'games';

  constructor(private http: HttpClient) { }

  // Get-Http request //
  getGameById(id): Observable<GameRoot> {
    return this.http.get<GameRoot>(this.path + '/' + id);
  }

  getAllGames(): Observable<GameRoot> {
    return this.http.get<GameRoot>(this.path);
  }

  // Get-Http request //
  getGamesOfSpecificUser(): Observable<GameRoot> {
    return this.http.get<GameRoot>(this.path);
  }

  // Post-HTTP request //
  postNewGameForSpecificUser(game: Game): Observable<Game> {
    return this.http.post<Game>(this.path, game);
  }

  // Update project title and description
  putProject(projectId, project: projectElements): Observable<any> {
    return this.http.put(this.path + '/' + projectId, project);
  }

  // Delete-HTTP request //
  deleteGameOfSpecificUser(gameId: number): Observable<any> {
    return this.http.delete(this.path + '/' + gameId);
  }

  // Install plugin to project //
  postPluginToProject(projectId: number, plugin: InstallPlugins): Observable<InstallPlugins> {
    return this.http.post<InstallPlugins>(this.path + '/' + projectId + '/plugins', plugin);
  }

  deleteInstalledPluginFromGame(gameId: number, pluginId: number): Observable<any> {
   return this.http.delete(this.path + '/' + gameId + '/plugins/' + pluginId);
  }

  getInstalledPluginsOfGame(gameId: number): Observable<RootInstalledPlugins> {
    /*return this.http.get<RootInstalledPlugins>(this.path + '/' + gameId + '/plugins'); */
    return this.http.get<RootInstalledPlugins>('assets/dummyJson/installedPlugins.json');
  }

  getGameRelease(gameId: number): Observable<GameRoot> {
    return this.http.get<GameRoot>(this.path + '/' + gameId + '/releases')
  }

  // get values from this general-use plugin //
  get object(): any {
    return this._object;
  }

  // set values to this general-use plugin //
  set object(data) {
    this._object = data;
  }


}
