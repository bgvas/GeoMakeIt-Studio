import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _element: any;


  constructor(private http: HttpClient) { }

  getUserProfile(): Observable<User> {
    const path = './assets/dummyJson/userProfile.json';
    return this.http.get<User>(path);
  }

  /*putUserProfile(userId, userProfileToUpdate: User): Observable<any> {
    const path = './assets/dummyJson/userProfile.json';
    return this.http.put(path, userProfileToUpdate);
  }*/

  set element(element: any) {
    this._element = element;
  }

  get element() {
    return this._element;
  }
}



