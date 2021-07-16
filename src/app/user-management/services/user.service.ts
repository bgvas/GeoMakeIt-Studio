import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _element: any;
  url2 = environment.v2Url;

  constructor(private http: HttpClient) { }

  getUserProfile(): Observable<User> {
    const path = 'assets/dummyJson/userProfile.json';
    return this.http.get<User>(path);
  }

  /*putUserProfile(userId, userProfileToUpdate: User): Observable<any> {
    const path = 'assets/dummyJson/userProfile.json';
    return this.http.put(path, userProfileToUpdate);
  }*/

  set element(element: any) {
    this._element = element;
  }

  get element() {
    return this._element;
  }
  
  getRole(): string {
    return localStorage.getItem('role');
  }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.url2 + 'user/all').pipe(map(e => {
      return (e.filter((user: User) => user.role !== 'super_admin'));
    }))
  }

  deleteUser(userId): Observable<any> {
    return this.http.delete(this.url2 + 'user/delete/' + userId);
  }

  updateUser(user: User, id): Observable<any> {
    return this.http.put(this.url2 + 'user/update', [id, user]);
  }

  newUser(user: User): Observable<any> {
    return this.http.post(this.url2 + 'user/new', [user]);
  }
 }



