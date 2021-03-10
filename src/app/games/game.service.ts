import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  // creation of an object, for general use (save and pass values between components)
  _object: any;

  constructor(private http: HttpClient) { }

  getGameById(id) {
    const url = './assets/dummyJson/listWithGamesOfUser';
    return this.http.get(url);
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
  getGamesOfSpecificUser(userId): Observable<any> {
    const url = 'assets/dummyJson/listWithGamesOfUser.json';
    return this.http.get(url);
  }
}
