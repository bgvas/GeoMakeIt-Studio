import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {GameRoot} from '../models/games/game-root';
import {environment} from '../../../environments/environment';
import {Game} from '../models/games/game';
import {ProjectUpdateModel} from '../models/projectElements/project-update-model';
import {map, retry, take, takeUntil, tap} from 'rxjs/operators';
import {SelectedPlugin} from '../../plugins/models/selectedPlugin/selected-plugin';
import {Plugin} from '../../plugins/models/plugin';
import {RootGameRelease} from '../models/game-release/root-game-release';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  _object: any;
  pathGame = environment.be_Url + 'games';
  pathGameReleases = environment.be_Url + 'game-releases';
  filter = '?filter[]=';
  checkPlugin: any;
  _refreshProjectsList$ = new Subject<void>();


  constructor(private http: HttpClient) { }

    // Post-HTTP request //
    createNewGame(newGame: Game): Observable<any> {
        return this.http.post<any>(this.pathGame, newGame);
    }

    getAllGamesByUser(id: number): Observable<GameRoot> {
        return this.http.get<GameRoot>(this.pathGame + this.filter + 'user_id=' + id).pipe(retry(3));
    }

    // Delete-HTTP request //
    deleteGame(id: number): Observable<any> {
        return this.http.delete(this.pathGame + '/' + id).pipe(tap(() => {
            this._refreshProjectsList$.next();
        }));
    }

    getAllGames(): Observable<GameRoot> {
        return this.http.get<GameRoot>(this.pathGame).pipe(retry(3));
    }

    // get values from this general-use plugin //
    get save_temporary(): any {
        return this._object;
    }

    // set values to this general-use plugin //
    set save_temporary(data) {
        this._object = data;
    }

    /* tested ^^^^ */



  // Get-Http request //
  getGameById(id): Observable<Game> {
    return this.http.get<Game>(this.pathGame + '/id/' + id);
  }

  getAllActiveGames(): Observable<Game[]> {
      return this.getAllGames().pipe(
          map(game => {
              return game['games'].filter(e => e.deleted_at === null);
          })
      );
  }

  getNumberOfActiveGames(): Observable<any> {
      return this.getAllActiveGames().pipe(map( games => { return games.length}))
  }


 // Update temporary_save title and description
 updateGame(id: number, gameChanges: ProjectUpdateModel): Observable<Game> {
   return this.http.put<Game>(this.pathGame + '/' + id, gameChanges);
 }


 // Install plugin to temporary_save //
 addPluginToProject(plugin: SelectedPlugin): Observable<any> {
   return this.http.post<any>(this.pathGame + '/addPlugin', [plugin]);
 }

 deleteInstalledPluginFromGame(gameId: number, pluginId: number): Observable<any> {
  return this.http.delete(this.pathGame + '/' + gameId + '/removePlugin/' + pluginId);
 }

 getInstalledPluginsOfGame(id: number): Observable<Plugin[]> {
    return this.http.get<Plugin[]>(this.pathGame + '/' + id + '/plugins');
  }

  getAllGameReleases(id: number): Observable<RootGameRelease> {
    return this.http.get<RootGameRelease>(this.pathGameReleases + this.filter + 'game_id=' + id)
  }

  checkIfPluginIsAlreadyInstalled(gameId: number, pluginId: number) {
      return this.http.get(this.pathGame + '/' + gameId + '/plugin/' + pluginId);
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
