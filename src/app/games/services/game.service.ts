import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {GameRoot} from '../models/games/game-root';
import {environment} from '../../../environments/environment';
import {Game} from '../models/games/game';
import {projectElements} from '../models/projectElements/project-elements';
import {map, tap} from 'rxjs/operators';
import {SelectedPlugin} from '../../plugins/models/selectedPlugin/selected-plugin';
import {Plugin} from '../../plugins/models/plugin';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  _object: any;
  path = environment.be_Url + 'games';
  checkPlugin: any;
  _refreshProjectsList$ = new Subject<void>();


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
          })
      );
  }


 getAllGamesByUserId(userId): Observable<any> {
     return this.http.get(this.path + '/user/id/' + userId);
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
   return this.http.delete(this.path + '/delete/' + id).pipe(tap(() => {
       this._refreshProjectsList$.next();
   }));
 }


 // Install plugin to project //
 addPluginToProject(plugin: SelectedPlugin): Observable<any> {
   return this.http.post<any>(this.path + '/addPlugin', [plugin]);
 }

 deleteInstalledPluginFromGame(gameId: number, pluginId: number): Observable<any> {
  return this.http.delete(this.path + '/' + gameId + '/removePlugin/' + pluginId);
 }

 getInstalledPluginsOfGame(gameId: number): Observable<Plugin[]> {
    return this.http.get<Plugin[]>(this.path + '/plugins/' + gameId);
  }

  getGameRelease(gameId: number): Observable<GameRoot> {
    return this.http.get<GameRoot>(this.path + '/' + gameId + '/releases')
  }

  checkIfPluginIsAlreadyInstalled(gameId: number, pluginId: number){
      return this.http.get(this.path + '/' + gameId + '/plugin/' + pluginId);
  }

  // get values from this general-use plugin //
  get object(): any {
    return this._object;
  }

  // set values to this general-use plugin //
  set object(data) {
    this._object = data;
  }

  set isInstalledPlugin(installed: boolean) {
      this.checkPlugin = installed;
  }

  get isInstalledPlugin(): boolean {
      return this.checkPlugin;
  }

  get refreshProjectsList$() {
      return this._refreshProjectsList$;
  }
}
