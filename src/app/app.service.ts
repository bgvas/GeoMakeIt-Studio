import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user/models/user';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _guardValidator: any;
  private _token: any;
  constructor(private http: HttpClient) {
  }

  currentUser( ): User {
  return JSON.parse(sessionStorage.getItem('user'));
  }

  get guard_activator() {
    return this._guardValidator;
  }

  set guard_activator(validator: any) {
    this._guardValidator = validator;
  }

  get token() {
    return this._token;
  }

  set token(token: any) {
    this._token = token;
  }
}
