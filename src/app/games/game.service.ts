import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GameRoot} from '../classes/games/game-root';
import {environment} from '../../environments/environment';
import {Game} from '../classes/games/game';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  // creation of an object, for general use (save and pass values between component)
  _object: any;
  path = environment.apiUrl + 'games';


  constructor(private http: HttpClient) { }

  getGameById(id): Observable<GameRoot> {

    return this.http.get<GameRoot>(this.path + '/' + id);

  }

  // get values from the general-use object //
  get object(): any {
    return this._object;
  }

  // save values to the general-use object //
  set object(data) {
    this._object = data;
  }

  // Get-Http request //
  getGamesOfSpecificUser(): Observable<GameRoot> {

    return this.http.get<GameRoot>(this.path);
  }

  // Post-HTTP request //
  postNewGameForSpecificUser(game: Game): Observable<Game> {

    return this.http.post<Game>(this.path, game);
  }

  deleteGameOfSpecificUser(gameId: number): Observable<any> {

    return this.http.delete(this.path + '/' + gameId);
  }
}
