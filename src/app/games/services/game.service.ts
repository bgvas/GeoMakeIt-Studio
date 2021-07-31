import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GameRoot} from '../models/games/game-root';
import {environment} from '../../../environments/environment';
import {Game} from '../models/games/game';
import {RootInstalledPlugins} from '../../plugins/models/installed_plugins/root-installed-plugins';
import {InstallPlugins} from '../models/installPlugins/install-plugins';
import {projectElements} from '../models/projectElements/project-elements';
import {delay, filter, map, mergeAll, switchMap} from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class GameService {

  _object: any;
  path = environment.be_Url + 'games';


  constructor(private http: HttpClient) { }

  // Get-Http request //
  getGameById(id): Observable<Game> {
    return this.http.get<Game>(this.path + '/id/' + id);
  }

  getAllGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.path + '/all');
  }

  getAllActiveGames(): Observable<Game[]> {
      return this.http.get<Game[]>(this.path + '/all').pipe(
          map(game => {
              return game['games'].filter(e => e.deleted_at === null);
              // return game['games'].forEach(e => e.deleted_at === null //
          })
      );
  }


 getAllGamesByUserId(userId): Observable<any> {
     return this.http.get(this.path + '/user/id/' + userId);
 }

 getAllGamesOfCurrentUser(): Observable<any> {
    return this.http.get(this.path + '/user/')
        .pipe(map((allProjects) => allProjects['games']));
 }

 // Post-HTTP request //
 createNewGame(newGame: Game): Observable<Game> {
   return this.http.post<Game>(this.path + '/new', [newGame]);
 }


 // Update project title and description
 updateGame(id, gameChanges: projectElements): Observable<any> {
   return this.http.put(this.path + '/update/' + id, gameChanges);
 }

 // Delete-HTTP request //
 deleteGame(id: number): Observable<any> {
   return this.http.delete(this.path + '/delete/' + id);
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
