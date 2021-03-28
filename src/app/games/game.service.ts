import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GameRoot} from '../classes/games/game-root';
import {environment} from '../../environments/environment';
import {Game} from '../classes/games/game';
import {Plugin} from '../classes/plugins/plugin';
import {RootPlugins} from '../classes/plugins/root-plugins';
import {RootInstalledPlugins} from '../classes/plugins/installed_plugins/root-installed-plugins';


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

  // Get-Http request //
  getGamesOfSpecificUser(): Observable<GameRoot> {

    return this.http.get<GameRoot>(this.path);
  }

  // Post-HTTP request //
  postNewGameForSpecificUser(game: Game): Observable<Game> {

    return this.http.post<Game>(this.path, game);
  }

  // Delete-HTTP request //
  deleteGameOfSpecificUser(gameId: number): Observable<any> {

    return this.http.delete(this.path + '/' + gameId);
  }

  getInstalledPluginsOfGame(gameId: number): Observable<RootInstalledPlugins> {
    /*return this.http.get<RootInstalledPlugins>(this.path + '/' + gameId + '/plugins'); */
    return this.http.get<RootInstalledPlugins>('assets/dummyJson/installedPlugins.json');
  }



  // get values from this general-use object //
  get object(): any {
    return this._object;
  }

  // save values to this general-use object //
  set object(data) {
    this._object = data;
  }


}
