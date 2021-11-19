import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Observable, of} from 'rxjs';
import {environment} from '../../../environments/environment';
import {RootUser} from '../models/root-user';
import {UpdateUserProfileRequestModel} from '../models/update-user-profile-request-model';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  _save_temporary: any;
  path = environment.be_Url + 'users';
  authPath = environment.be_Url + 'auth';

  constructor(private http: HttpClient) { }

  getUser(id): Observable<User> {
    return this.http.get<User>(this.path + '/' + id);
  }

  updateUser(detailsForUpdate: UpdateUserProfileRequestModel, id: number): Observable<User> {
    return this.http.put<User>(this.path + '/' + id, detailsForUpdate);
  }
  /* tested^^^ */

  getUserProfile(): Observable<User> {
    const path = 'assets/dummyJson/userProfile.json';
    return this.http.get<User>(path);
  }

  set save_temporary(element: any) {
    this._save_temporary = element;
  }

  get save_temporary() {
    return this._save_temporary;
  }

  getAllUsers(): Observable<User> {
    return this.http.get<User>(this.path + '/all');
  }

  deleteUser(userId): Observable<any> {
    return this.http.delete(this.path + '/delete/' + userId);
  }

  newUser(user: User): Observable<any> {
    return this.http.post(this.path + '/new', [user]);
  }

  checkIfEmailExists(email): Observable<boolean> {
    return this.http.post<boolean>(this.authPath + '/check-email', {'email': email});
  }

 }



