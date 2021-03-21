import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GameRoot} from '../classes/games/game-root';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  // creation of an object, for general use (save and pass values between component)
  _object: any;

  constructor(private http: HttpClient) { }

  getGameById(id): Observable<GameRoot> {
    const url = environment.apiUrl + 'games/' + id;
    return this.http.get<GameRoot>(url);
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
  getGamesOfSpecificUser(userId): Observable<GameRoot> {
    const url = environment.apiUrl + 'games';
    return this.http.get<GameRoot>(url);
  }
}
